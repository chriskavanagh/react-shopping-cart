import React, { Component } from "react";
import { Button, Collapse, Card, Media, Row, Col } from "react-bootstrap";

export default class ItemDetails extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button
          style={{ marginBottom: "10px" }}
          className="item-details-button"
          aria-controls="example-collapse-text"
          example-collapse-text={open}
          variant="link"
          onClick={() => this.setState({ open: !open })}
        >
          {this.state.open === false ? `+` : `-`}
          {this.state.open === false ? `See` : `Hide`} item details
          {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={open}>
          <Card bg="light" border="dark" id="example-collapse-text">
            <Card.Body>
              <Media>
                <img
                  width={100}
                  height={100}
                  className="align-self-center mr-3"
                  src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                  alt="thumbnail"
                />
                <Media.Body>
                  <p>
                    Essentials by OFM ESS-3085 Racing Style Leather Gaming
                    Chair, Red
                  </p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong>${this.props.price}</strong>
                      <br />
                      <strong className="price-strike">
                        {this.props.price}
                      </strong>
                    </Col>
                    <Col md={6}>
                      <strong>Qty: 1</strong>
                    </Col>
                  </Row>
                </Media.Body>
              </Media>
            </Card.Body>
          </Card>
        </Collapse>
      </div>
    );
  }
}
