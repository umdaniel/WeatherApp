import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "ebe7d1774f37da41f1014c2b9085e41d";

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  //Calls the api.
  getWeather = async (e) => {
    //Prevents a full page refresh.
    e.preventDefault();
    
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //Calls the url of the api.
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    //Converts the api data into readable programming language.
    const data = await apiCall.json();

    //If these values exist returns true and set the state.
    if (city && country) {
    //Sets the state of the state items.
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
      //If the values do not exist, show the error message.
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter input:"
      });
    } 
  }

  render() {
    return (
      <div>
        <div className= "wrapper">
          <div className= "main">
            <div className= "container">
            <Titles/>
              <div className= "row">
              <Form getWeather= {this.getWeather}/>
              <Weather 
              city= {this.state.city}
              country= {this.state.country}
              temperature= {this.state.temperature}
              humidity= {this.state.humidity}
              description= {this.state.description}
              error= {this.state.error}
              >
              </Weather>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;