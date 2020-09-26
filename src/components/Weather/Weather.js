import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CityList from "../CityList/CityList";
import FormWithState from "../FormWithState/FormWithState";
import FormWithRefs from "../FormWithRefs/FormWithRefs";

const API_KEY = "c4108ceda1c48840c4e9e0d411abe54b";

class App extends React.Component {
  state = {
    city: "",
    temp: "",
    conditions: "",
    loading: true,
    cityList: ["Toronto", "Miami", "Tokyo", "Vancouver", "London"],
  };

  componentDidMount() {
    this.setState({
      loading: false,
    });
    this.getWeather("Winnipeg");
  }

  getWeather = (city) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        this.setState({
          city: city,
          temp: response.data.main.temp,
          conditions: response.data.weather[0].main,
        });
      })
      .catch((err) => console.log("err", err));
  };

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.cityId !== this.props.match.params.cityId) {
      console.log("prevProps", prevProps);
      console.log("props", this.props);
      this.getWeather(this.props.match.params.cityId);
      this.setState({
        loading: false,
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.getWeather(event.target.city.value);
    event.target.reset();
    this.setState({
      loading: false,
    });
  };

  //using Refs
  // handleSubmitRefs = (city) => {
  //   this.getWeather(city);
  // };

  render() {
    return (
      <>
        {this.state.loading && <h1>Loading...</h1>}

        <div className="App">
          <h1>{this.state.city}</h1>
          <p>{this.state.temp}°C</p>
          <p>{this.state.conditions}</p>

          <FormWithState handleSubmit={this.handleSubmit} />
          {/* <FormWithRefs handleSubmitRefs={this.handleSubmitRefs} /> */}
        </div>
        <CityList cityList={this.state.cityList} />
        <Link to="/">Return Home</Link>
      </>
    );
  }
}

export default App;
