import React from 'react'

class CartaoCreditoPayType extends React.Component {
  render() {
    return (
      <div>
        <div className="field">
          <label htmlFor="order_credit_card_number">Cartão de Crédito #</label>
          <input type="password"
                 name="order[credit_card_number]" 
                 id="order_credit_card_number" />
        </div>
        <div className="field">
          <label htmlFor="order_expiration_date">Validade</label>
          <input type="text"
                 name="order[expiration_date]" 
                 id="order_expiration_date"
                 size="9"
                 placeholder="e.g. 03/19" />
        </div>
      </div>
    );
  }
}
export default CartaoCreditoPayType