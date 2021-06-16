import React, { useEffect, useState } from "react";
import Forecast from "./Forecast.js";
import WeatherIcon from "./WeatherIcon.js";
import HourlyTemp from "./HourlyTemp.js";
import HourlyPrec from "./HourlyPrec.js";
import img1 from "../images/clearDay.jpg";
import img2 from "../images/clearNight.jpg";
import img3 from "../images/rain.jpg";
import img4 from "../images/PartlyCloudy.jpg";
import img5 from "../images/PartlyCloudyN.jpg";
import img6 from "../images/overcastSky.jpg";

const Weather = (props) => {
  const [weather, setWeather] = useState();
  const [selected, setSelect] = useState("temp");

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const values = !weather ? props.data : weather;
  let today = new Date();
  let day = today.getDay();
  let month = today.getMonth();
  let date = today.getDate();
  let city = props.timezone.split("/").pop();
  let iconName = values.weather[0].icon;
  console.log(values);
  const background = (iconName) => {
    switch (iconName) {
      case "01d":
        return img1;

      case "01n":
        return img2;

      case "02d":
        return img4;

      case "02n":
        return img5;

      case "03d":
        return img6;

      case "04d":
        return img6;

      case "09d":
        return img3;

      case "10d":
        return img3;

      case "10n":
        return img3;

      case "11d":
        return img6;

      case "13d":
        return img6;

      case "50n":
        return img6;
      default:
        return img1;
    }
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url(${background(iconName)})`;
  }, [iconName]);

  return (
    <div className="container">
      <div className="currentWeather">
        <div className="location" onClick={() => window.location.reload()}>
          <div className="loc_cont">
            <h2>{city}</h2>
            <p>{days[day] + ", " + months[month] + " " + date}</p>
          </div>
        </div>
        <div className="weatherInfo">
          <div className="weatherIcon">
            <WeatherIcon data={values} />
          </div>
          <div className="weatherDetails">
            <h2>{Math.round(!isNaN(values.temp) ? values.temp : values.temp.max)} °C</h2>
            <p>Feels like: {!isNaN(values.feels_like) ? Math.round(values.feels_like) : Math.round(values.feels_like.day)} °C</p>
            <p id="margin">{values.weather[0].description}</p>
            <p>Humidity: {values.humidity}%</p>
            <p>Wind: {values.wind_speed} km/h</p>
          </div>
          {window.innerWidth > 500 ? (
            <div className="selection">
              <p
                onClick={() => setSelect("temp")}
                style={selected === "temp" ? { borderBottom: "1px solid white" } : { borderBottom: "1px solid transparent" }}
              >
                Temperature
              </p>
              <p onClick={() => setSelect("prec")} tabindex="0">
                Precipation
              </p>
            </div>
          ) : null}
          {selected === "temp" || window.innerWidth < 500 ? (
            <div className="hourly">
              {props.hourly
                .filter((i, index) => index % 2 === 0)
                .slice(0, window.innerWidth < 370 ? 8 : window.innerWidth < 500 ? 11 : 12)
                .map((d) => {
                  return <HourlyTemp hourly={d} key={d.clouds} temp={"temp"} />;
                })}
            </div>
          ) : null}
          {selected === "prec" || window.innerWidth < 500 ? (
            <div className="hourly">
              {props.hourly
                .filter((i, index) => index % 2 === 0)
                .slice(0, window.innerWidth < 370 ? 8 : window.innerWidth < 500 ? 9 : 10)
                .map((d) => {
                  return <HourlyPrec hourly={d} key={d.clouds} />;
                })}
            </div>
          ) : null}
        </div>

        <div className="forecast">
          {props.daily.slice(0, 4).map((d, i) => {
            let index = i + 1;
            let forecastDay = days[day + index > 7 ? day + index - 7 : day + index].substring(0, 3);
            return <Forecast key={d.weather[0].id + i} data={d} forecastDay={forecastDay} setWeather={setWeather} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Weather;
