import React from "react";

const Pizza = ({ pizza, handleEditClick }) => {
  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? "Yes" : "No"}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleEditClick(pizza)}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
};

export default Pizza;
