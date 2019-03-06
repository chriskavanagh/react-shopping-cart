import React, { Component } from "react";
import PickUpSavings from "./components/PickUpSavings";
import SubTotal from "./components/Subtotal";
import TaxesFees from "./components/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal";
import ItemDetails from "./components/ItemDetails";
import PromoCode from "./components/PromoCode";
import "./App.css";

class App extends Component {
  state = {
    total: 100,
    pickupSavings: -3.85,
    taxes: 0,
    estimatedTotal: 0,
    disablePromoButton: false
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
          <TaxesFees taxes={taxes} />
          <hr />
          <EstimatedTotal price={estimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
          <hr />
          <PromoCode
            giveDisount={() => this.giveDiscountHandler()}
            isDisabled={disablePromoButton}
          />
        </div>
      </div>
    );
  }
}

export default App;
