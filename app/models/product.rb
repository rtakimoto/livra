class Product < ApplicationRecord
    has_many :line_items
    has_many :orders, through: :line_items
    before_destroy :ensure_not_referenced_by_any_line_item
    after_save :store_photo

    validates :title, :description, presence: true
    validates :extension, allow_blank: true, format: {
      with:    %r{gif|jpg|png}i,
      message: 'Precisa ser uma imagem GIF, JPG ou PNG.'
    }
    validates :title, uniqueness: true
    validates :price, numericality: { greater_than_or_equal_to: 0.01 }

    def has_photo?
        File.exists? photo_filename
    end

    def photo=(file_data)
        unless file_data.blank?
            @file_data = file_data
            self.extension = file_data.original_filename.split('.').last.downcase
        end
    end

    PHOTO_STORE = File.join Rails.root, 'public', 'photo_store'
    def photo_filename
        File.join PHOTO_STORE, "#{id}.#{extension}"
    end

    def photo_path
        "/photo_store/#{id}.#{extension}"
    end

  private
    def store_photo
        if @file_data
            FileUtils.mkdir_p PHOTO_STORE
            File.open(photo_filename, 'wb') do |f|
                f.write(@file_data.read)
            end
            @file_data = nil
        end
    end
  
    # ensure that there are no line items referencing this product
    def ensure_not_referenced_by_any_line_item
        unless line_items.empty?
          errors.add(:base, 'Line Items present')
          throw :abort
        end
      end
end