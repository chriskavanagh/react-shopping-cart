import React, { Component } from "react";
import { Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

const styles = {
  pickupSavings: {
    textDecoration: "underline",
    paddingBottom: "5px"
  },
  totalSavings: {
    color: "red",
    paddingBottom: "15px",
    fontWeight: 800
  },
  tooltipP: {
    paddingTop: "7px"
  }
};

export default class PickUpSavings extends Component {
  render() {
    const tooltip = (
      <Tooltip id="tooltip">
        <p style={styles.tooltipP}>
          Picking Up Your Order In Store Helps Us Cut Costs And We Pass Savings
          On To You!
        </p>
      </Tooltip>
    );
    return (
      <Row className="show-grid">
        <Col md={6}>
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <div style={styles.pickupSavings}>Pickup Savings</div>
          </OverlayTrigger>
        </Col>
        <Col style={styles.totalSavings} md={6}>
          ${this.props.price}
        </Col>
      </Row>
    );
  }
}
