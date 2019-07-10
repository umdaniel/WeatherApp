import React from "react";
import "./Enter.css";

//Changed to a function that takes in props as a parameter.
//Does not effect state so does not need to be a class.
const Enter = (props) => {
    
    return (
        //Setting up a prop called getWeather.
        <form onSubmit= {props.getWeather}>
            <input type= "text" name= "city" placeholder= "City..."/>
            <input type= "text" name= "country" placeholder= "Country..."/>
            <button>Get Weather</button>
        </form>
    );
}

export default Enter;