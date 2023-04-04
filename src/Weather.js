import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import DailyForecast from "./DailyForecast";
import "./Weather.css";
// import CurrentLocation from "./CurrentLocation";
import axios from 'axios';


export default function Weather(props) {
    // const [loaded, setLoaded] = useState(false);
    const [weatherData, setWeatherData] = useState({ loaded: false });
    const [city, setCity] = useState(props.defaultCity);
        
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            loaded: true,
            city: response.data.name,
            coordinates: response.data.coord,
            date: new Date(response.data.dt *1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            temperature: response.data.main.temp,
            feelsLike: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
        // alert(city);
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }
    

    function search() {
        // let apiKey = "3dce9b1c66837262a25b3f448d354a76";
        let apiKey = "e947cb2640f1db92e6a19005bc43b435";
        let units = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
         // let apiKey = "6d85a1od5b40aa0051a473016f5eet19";
        // let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleCurrentLocation(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(showLocation);
    }
    function showLocation(position) {
        console.log(position.coords.latitude, position.coords.longitude);  
        let currentLatitude = position.coords.latitude;
        let currentLongitude = position.coords.longitude;
        // let units = "metric";
        let apiKey = "e947cb2640f1db92e6a19005bc43b435";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }



    if (weatherData.loaded) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Your city is..." className="form-control" autoFocus="on" onChange={handleCityChange} />
                        </div>
                        <div className="col-3 rowButtons">
                            <input type="submit" value="Search" className="btn btn-success"/>
                            {/* <button className = "currentLocationButton" >Current</button> */}
                            <button className = "currentLocationButton" onClick={handleCurrentLocation} value="Location">Current</button>
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
                <DailyForecast coordinates={weatherData.coordinates} />
            </div>
        );

    } else {
        search();
        return "Loading...";
    }    
}