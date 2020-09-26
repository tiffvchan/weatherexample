import React from "react";
import City from "../City/City";
import { Link } from "react-router-dom";

class CityList extends React.Component {
  render() {
    return (
      <>
        {this.props.cityList.map((city) => {
          return (
            <Link key={city} to={`/weather/${city}`}>
              <City cityName={city} />
            </Link>
          );
        })}
      </>
    );
  }
}

export default CityList;
