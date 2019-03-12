import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";

const INITIAL_STATE = {
  list: [1, 2, 3]
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  onClearArray = () => {
    this.setState({ list: [] });
  };

  onResetArray = () => {
    this.setState({ ...INITIAL_STATE });
    // this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <Container>
        <ul>
          {this.state.list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <Button className="mx-3" type="button" onClick={this.onClearArray}>
          Clear Array
        </Button>

        <Button className="mx-3" type="button" onClick={this.onResetArray}>
          Reset Array
        </Button>
      </Container>
    );
  }
}

export default App;
