import React from "react";
import DateDisplay from "./DateDisplay";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
    
            <ul>
                <li><DateDisplay date={props.data.date} /></li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>

            <div className="row mt-3">
                <div className="col-8">
                
                    <div className="clearfix">
                        <WeatherIcon code={props.data.icon} />
                        <span className="temperature">{Math.round(props.data.temperature)}</span>
                        <span className="units">°C</span>
                    </div>
                    
                    {/* <div className="float-left">
                            <WeatherIcon code={props.data.icon} />
                        </div> */}
                    {/* <div className="clearfix">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAjdJREFUeNrtmsGtgzAMhjtCRmAERsgIHYFjjx2BERiBEToCI+TaG2+DbJBnKj8pD1Eaiv8AwpX+C1Ap/hzHjpNLCOFyZl0UgAJQAApAASgABaAAFIACODEA9C/83AypIrUkRwpv5Pib4dsCNp5cAMgIS3rMGPxJw3/t4QDQoEtSt8LwsTpJEFAAAONjNUM4HSIEOO7vJC8Mwa2FkHURZBDSM2KAWu4CwPP5LEgtyZMCy/OzIgKBgGA2BUAGliPDxxreldFM2EU4JAOgwRtSPeHdmj0/Z3z8fcEQasTCiATgEgxMURvNAkR2sOIA2MtBSH60KNbC4dAhAHhBACFDdrBiADj2A0DI7PA4AgB0dihWAaBBXUk92Hhkdqi+BsDGh8ySzg7tGgD9BgC88FrgvgKQIeY/ZgepxXB3m6EFm6bm7ADqQwDggSLUHQVA2KG6P50JQJ+a96UBuC08OwqRerOWGPftkUa7Oc/GrTBKo5b0mEivwzOLAlABjb8v6EY1CXVGgwCAampUqZ5NNP5fuS1aB6w87Zn1PG+XpStOKw3AIro5IONfM0e8EhRsZFxz7EYRACRmgQc0YPMAENrAdJk6UBgAKwojz/W/yQUgXgilARguS5dUd2Yir+foPzSQ7TAfifdLOjZvzhSzQID0A3gmuJTDzIQzRXg4IC9IvFsY68jzWxr/qgvQV2TsRJ1gwMXOIuW+JNWhjtx2DWCDE6fvAOhNUQWgABSAAlAACkABKAAFoABOp1+6Bd0LJ+BorgAAAABJRU5ErkJggg==" alt="Mostly Cloudy" className="float-left" />
                        <div className="float-left">
                            <span className="temperature">12</span>
                            <span className="units">°C</span>
                        </div>
                    </div> */}
                </div>
                <div className="col-4">
                    <ul>
                        {/* <li>Precipitation: 15%</li> */}
                        <li>Humidity: {props.data.humidity} %</li>
                        <li>Wind: {props.data.wind} km/s</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}