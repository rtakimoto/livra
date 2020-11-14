import React from 'react'

class BoletoPayType extends React.Component {
  render() {
    return (
      <div>
        <div className="field">
          <label htmlFor="order_cpf">CPF</label>
          <input type="text"
                 name="order[cpf]" 
                 id="order_cpf" />
        </div>
      </div>
    );
  }
}
export default BoletoPayType