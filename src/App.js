import React, { Component, Fragment } from "react";

import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";

class App extends Component {
  state = {
    pizza: "",
  };

  handleEditClick = (pizza) => {
    this.setState({ pizza: pizza });
  };

  saveChanges = (formData) => {
    console.log(formData);
    this.setState({
      pizza: formData,
    });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm pizza={this.state.pizza} saveChanges={this.saveChanges} />
        <PizzaList
          handleEditClick={this.handleEditClick}
          pizza={this.state.pizza}
        />
      </Fragment>
    );
  }
}

export default App;
