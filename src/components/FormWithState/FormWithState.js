import React from "react";

class FormWithState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
    };
  }

  updateCity = (event) => {
    this.setState({
      cityName: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(event);
    this.setState({
      cityName: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Enter a City</label>
        <input
          type="text"
          name="city"
          value={this.state.cityName}
          onChange={this.updateCity}
          required
        />
        <button type="submit">Enter</button>
      </form>
    );
  }
}

export default FormWithState;
