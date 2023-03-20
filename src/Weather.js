import React from "react";
import axios from 'axios';

export default function Weather(props) {
    
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
    }
    
    let units = "metric";
    let apiKey = `be60748992fab0f5da8162563fb21245`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
    

    axios.get(apiUrl).then(handleResponse);

    return (<h2>Slava Ukraini!</h2>);
}