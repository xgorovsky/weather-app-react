import React from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import Footer from './components/Footer';

/* LINKS:
API: https://home.openweathermap.org/ @biedrawa.igor
tutorial: https://www.youtube.com/watch?v=204C9yNeOYI
*/

const API_KEY = "3d07ac3e7716f1c5fa32f30e69812237";


class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    //const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data = await api_call.json();
    if (city && data.cod === 200) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        pressure: data.main.pressure,
        description: data.weather[0].description,
        error: ''
      });
    } else if (data.cod === "404") {
      this.setState({
        error: "City not in our database, sorry..."
      })
    } 
    else {
      this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      pressure: undefined,
      sunrise: undefined,
      sunset: undefined,
      description: undefined,
      error: 'Please enter a proper city name!'
    });
    }
  }
  
  render() {
    return (
      <div className="app-wrapper">
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          description={this.state.description}
          error={this.state.error}
        />
        <Footer />
      </div>
    );
  }
};



export default App;
