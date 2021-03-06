import React, { Component } from "react";
import axios from "axios";
import { Button, FormControl, Container } from "react-bootstrap";

export default class Posts extends Component {
  state = {
    name: ""
  };

  handleChange = evt => {
    const { value } = evt.target;
    this.setState({ name: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const user = {
      name: this.state.name
    };
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res.data);
      });
  };

  /*handleSubmit = async evt => {
    evt.preventDefault();
    const user = {
      name: this.state.name
    };

   try {
      const response = await axios.post(
        `https://jsonplaceholder.typicode.com/users`,
        {
          user
        }
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }; */

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Person Name:
            <FormControl type="text" name="name" onChange={this.handleChange} />
          </label>
          <Button type="submit">Add</Button>
        </form>
      </Container>
    );
  }
}
