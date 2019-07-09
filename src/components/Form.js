import React from "react";
import "./Form.css";

class Form extends React.Component {
    render() {
        return (
            //Setting up a prop called getWeather.
            <form onSubmit= {this.props.getWeather}>
                <input type= "text" name= "city" placeholder= "City..."/>
                <input type= "text" name= "country" placeholder= "Country..."/>
                <button>Get Weather</button>
            </form>
        );
    }
}

export default Form;