import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Weather from "./components/Weather/Weather";
import Header from "./components/Header/Header";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/weather/:cityId" component={Weather} />
            <Route path="/weather" component={Weather} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
