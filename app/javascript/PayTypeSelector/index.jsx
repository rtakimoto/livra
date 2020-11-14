import React from 'react'
import NoPayType            from './NoPayType';
import CartaoCreditoPayType from './CartaoCreditoPayType';
import DepositoPayType      from './DepositoPayType';
import BoletoPayType        from './BoletoPayType';
    
class PayTypeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedPayType: null };
    this.onPayTypeSelected = this.onPayTypeSelected.bind(this);
  }

  onPayTypeSelected(event) {
    this.setState({ selectedPayType: event.target.value });
  }

  render() {
    let PayTypeCustomComponent = NoPayType;
    if (this.state.selectedPayType == "Cartao de Credito") {
      PayTypeCustomComponent = CartaoCreditoPayType;
    } else if (this.state.selectedPayType == "Deposito") {
      PayTypeCustomComponent = DepositoPayType;
    } else if (this.state.selectedPayType == "Boleto") {
      PayTypeCustomComponent = BoletoPayType;
    }
    return (
      <div>
        <div className="field">
          <label htmlFor="order_pay_type">Forma de Pagamento</label>
          <select id="order_pay_type" onChange={this.onPayTypeSelected} 
            name="order[pay_type]">
            <option value="">Selecione a Forma de Pagamento</option>
            <option value="Deposito">Deposito</option>
            <option value="Cartao de Credito">Cartao de Credito</option>
            <option value="Boleto">Boleto</option>
          </select>
        </div>
        <PayTypeCustomComponent />
      </div>
    );
  }
}
export default PayTypeSelector