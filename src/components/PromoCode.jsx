import React, { Component } from "react";
import { Row, Col, Button, Form, Collapse } from "react-bootstrap";

export default class PromoCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      open: false
    };
  }
  render() {
    const { open } = this.state;
    return (
      <div>
        <Button
          className="promo-code-button"
          variant="link"
          onClick={() => this.setState({ open: !open })}
        >
          {this.state.open === false ? `+` : `-`}
          Promo Code
          {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={open}>
          <Row className="show-grid">
            <Col md={12}>
              <Form>
                <Form.Group controlId="formInlineName">
                  <Form.Control
                    type="text"
                    placeholder="Enter Promo Code"
                    value={this.props.promoCode}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Button
                  block
                  variant="outline-success"
                  className="btn-round"
                  disabled={this.props.isDisabled}
                  onClick={this.props.giveDiscount}
                >
                  Get Your Discount!
                </Button>
              </Form>
            </Col>
          </Row>
        </Collapse>
      </div>
    );
  }
}
