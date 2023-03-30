import React, { useState } from "react";

export default function CelsiusTemperature(props) {
    return (
        <div className="CelsiusTemperature">
            <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="units">°C</span>
        </div>
    );
}