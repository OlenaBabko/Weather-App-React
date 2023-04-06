// import React from "react";

// export default function CelsiusTemperature(props) {
//     return (
//         <div className="CelsiusTemperature">
//             <span className="temperature">{Math.round(props.celsius)}</span>
//             <span className="units">°C</span>
//         </div>
//     );
// }

import React, { useState } from "react";

export default function CelsiusTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    
    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
        return (
            <div className="Celsius">
                <span className="temperature">{Math.round(props.celsius)}</span>
                <span className="units">{" "}°C |{" "}<a href="/" onClick={convertToFahrenheit}>°F{" "}</a></span>
            </div>
        );
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32;
        return (
            <div className="Fahrenheit">
                <span className="temperature">{Math.round(fahrenheit)}</span>
                <span className="units"><a href="/" onClick={convertToCelsius}>°C</a>{" "}| °F</span>
            </div>
        );
    }
}