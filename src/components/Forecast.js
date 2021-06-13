import React from "react";
import WeatherIcon from "./WeatherIcon.js";

const Forecast = (props) => {
  console.log(props);
  return (
    <div className="forecastDay" onClick={() => props.setWeather(props.data, props.forecastDay)}>
      <p> {props.forecastDay}</p>
      <WeatherIcon data={props.data} forecastDay={props.forecastDay} />
      <div className="forecastTemp">
        <p className="maxForTemp">{Math.round(props.data.temp.max)}°</p>
        <p className="minForTemp">{Math.round(props.data.temp.min)}°</p>
      </div>
    </div>
  );
};

export default Forecast;
