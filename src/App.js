import React, { Component } from "react";
import PickUpSavings from "./components/PickUpSavings";
import SubTotal from "./components/Subtotal";
import TaxesFees from "./components/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal";
import ItemDetails from "./components/ItemDetails";
import PromoCode from "./components/PromoCode";
import { connect } from "react-redux";
import { handleChange } from "./actions/promoCodeActions";
import "./App.css";

class App extends Component {
  state = {
    total: 100,
    pickupSavings: -3.85,
    taxes: 0,
    estimatedTotal: 0,
    disablePromoButton: false
  };

  componentDidMount = () => {
    this.setState(
      {
        taxes: (this.state.total + this.state.pickupSavings) * 0.0875
      },
      () =>
        this.setState({
          estimatedTotal:
            this.state.total + this.state.pickupSavings + this.state.taxes
        })
    );
  };

  giveDiscountHandler = () => {
    if (this.props.promoCode === "DISCOUNT") {
      this.setState({ estimatedTotal: this.state.estimatedTotal * 0.9 }, () => {
        this.setState({
          disablePromoButton: true
        });
      });
    }
  };

  render() {
    const {
      total,
      pickupSavings,
      taxes,
      estimatedTotal,
      disablePromoButton
    } = this.state;
    return (
      <div className="container d-flex justify-content-center">
        <div className="purchase-card">
          <h3>Purchase App</h3>
          <SubTotal price={total.toFixed(2)} />
          <PickUpSavings price={pickupSavings} />
          <TaxesFees taxes={taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={estimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
          <hr />
          <PromoCode
            giveDiscount={() => this.giveDiscountHandler()}
            isDisabled={disablePromoButton}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(
  mapStateToProps,
  {
    handleChange
  }
)(App);
