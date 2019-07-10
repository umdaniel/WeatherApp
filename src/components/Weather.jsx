import React from "react";
import "./Weather.css";

import { faThermometerEmpty } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Changed to a function that takes in props as a parameter.
//Does not effect state so does not need to be a class.

const Weather = (props) => {
  return (
    //Only displays information when input is given
    //or when no input is given and a error message appears.
    <div>
      <FontAwesomeIcon icon={faCity} />
      {props.city && props.country && (
        <p>
          Location: {props.city}, {props.country}
        </p>
      )}
      <FontAwesomeIcon icon={faThermometerEmpty} />
      {props.temperature && <p>Temperature: {props.temperature}</p>}
      <FontAwesomeIcon icon={faTint} />
      {props.humidity && <p>Humidity: {props.humidity}</p>}
      <FontAwesomeIcon icon={faNewspaper} />
      {props.description && <p>Conditions: {props.description}</p>}
      {props.error && <p>{props.error}</p>}
    </div>
  );
}

export default Weather;
