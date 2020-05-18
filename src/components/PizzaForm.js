import React from "react";

class PizzaForm extends React.Component {
  constructor() {
    super();
    this.state = {
      topping: "",
      size: "",
      vegetarian: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pizza !== this.props.pizza) {
      this.setState({
        topping: this.props.pizza.topping,
        size: this.props.pizza.size,
        vegetarian: this.props.pizza.vegetarian,
      });
    }
  }

  handleChangeTopping = (e) => {
    this.setState({
      topping: e.target.value,
    });
  };

  handleChangeSize = (e) => {
    this.setState({
      size: e.target.value,
    });
  };

  handleChangeVegetarian = () => {
    this.setState((prevState) => {
      return {
        vegetarian: !prevState.vegetarian,
      };
    });
  };

  handleSubmit = () => {
    const pizzaID = this.props.pizza.id;
    const { topping, size, vegetarian } = this.state;

    fetch(`http://localhost:3000/pizzas/${pizzaID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topping: topping,
        size: size,
        vegetarian: vegetarian,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => this.props.saveChanges(data));
  };

  render() {
    const { topping, size, vegetarian } = this.state;

    return (
      <div className="form-row">
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Pizza Topping"
            value={topping}
            onChange={(e) => this.handleChangeTopping(e)}
          />
        </div>
        <div className="col">
          <select
            value={size}
            className="form-control"
            onChange={(e) => this.handleChangeSize(e)}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="Vegetarian"
              checked={vegetarian}
              onChange={this.handleChangeVegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="Not Vegetarian"
              checked={!vegetarian}
              onChange={this.handleChangeVegetarian}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button
            type="submit"
            className="btn btn-success"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default PizzaForm;
