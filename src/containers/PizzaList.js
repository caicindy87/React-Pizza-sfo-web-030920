import React, { Component } from "react";
import Pizza from "../components/Pizza";
class PizzaList extends Component {
  state = {
    pizzas: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then((resp) => resp.json())
      .then((data) => this.setState({ pizzas: data }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const changedPizzas = this.state.pizzas.map((pizza) =>
        pizza.id === this.props.pizza.id ? this.props.pizza : pizza
      );

      this.setState({
        pizzas: changedPizzas,
      });
    }
  }

  render() {
    const { pizzas } = this.state;

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {pizzas.map((pizza) => (
            <Pizza
              key={pizza.id}
              pizza={pizza}
              handleEditClick={this.props.handleEditClick}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default PizzaList;
