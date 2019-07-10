import React from "react";
import "./Weather.css";
import {faThermometerEmpty} from "@fortawesome/free-solid-svg-icons";
import {faCity} from "@fortawesome/free-solid-svg-icons";
import {faTint} from "@fortawesome/free-solid-svg-icons";
import {faNewspaper} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Weather extends React.Component {
    render() {
        return (
            //Only displays information when input is given 
            //or when no input is given and a error message appears.
            <div>
                <FontAwesomeIcon icon= {faCity} />
                {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
                <FontAwesomeIcon icon= {faThermometerEmpty} />
                {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                <FontAwesomeIcon icon= {faTint} />
                {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
                <FontAwesomeIcon icon= {faNewspaper} />
                {this.props.description && <p>Conditions: {this.props.description}</p>}
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        );
    }
}

export default Weather;
