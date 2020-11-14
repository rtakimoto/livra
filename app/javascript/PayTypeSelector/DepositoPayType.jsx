import React from 'react'
    
class DepositoPayType extends React.Component {
  render() {
    return (
      <div>
        <div className="field">
          <label htmlFor="banco">Banco de Origem</label>
          <input type="text"
                 name="order[banco]" 
                 id="banco" />
        </div>
      </div>
    );
  }
}
export default DepositoPayType