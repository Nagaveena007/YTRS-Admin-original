import React from "react";
import IngredientsCreate from "./IngredientsCreate";

class IngredientsAdd extends React.Component {
  state = {
    ingredientsDetails: [
      {
        index: Math.random(),
        item: "",
        quantity: "",
        unit: "",
      },
    ],
  };
  handleChange = (e) => {
    if (["item", "quantity", "unit"].includes(e.target.name)) {
      let ingredientsDetails = [...this.state.ingredientsDetails];
      ingredientsDetails[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  addNewRow = (e) => {
    this.setState((prevState) => ({
      ingredientsDetails: [
        ...prevState.ingredientsDetails,
        {
          index: Math.random(),
          item: "",
          quantity: "",
          unit: "",
        },
      ],
    }));
  };

  deteteRow = (index) => {
    this.setState({
      ingredientsDetails: this.state.ingredientsDetails.filter(
        (s, sindex) => index !== sindex
      ),
    });
  };

  clickOnDelete(record) {
    this.setState({
      ingredientsDetails: this.state.ingredientsDetails.filter(
        (r) => r !== record
      ),
    });
  }
  render() {
    let { ingredientsDetails } = this.state;
    return (
      <div className="content">
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <label className="ml-1">Ingredients</label>
          <div className="row" style={{ marginTop: 20 }}>
            <IngredientsCreate
              add={this.addNewRow}
              delete={this.clickOnDelete.bind(this)}
              ingredientsDetails={ingredientsDetails}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default IngredientsAdd;
