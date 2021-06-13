import React from "react";
import {
  WiDaySunny,
  WiDaySunnyOvercast,
  WiCloud,
  WiCloudy,
  WiDust,
  WiRain,
  WiDayRain,
  WiThunderstorm,
  WiSnowWind,
  WiNightClear,
  WiNightAltCloudy,
  WiNightAltRain,
} from "react-icons/wi";

const WeatherIcon = (props) => {
  let iconName = props.data.weather[0].icon;
  let icon = "";
  let className = props.forecastDay ? "forIcon" : "icon";

  switch (iconName) {
    case "01d":
      icon = <WiDaySunny className={className} />;
      break;
    case "01n":
      icon = <WiNightClear className={className} />;
      break;
    case "02d":
      icon = <WiDaySunnyOvercast className={className} />;

      break;
    case "02n":
      icon = <WiNightAltCloudy className={className} />;

      break;
    case "03d":
      icon = <WiCloud className={className} />;
      break;
    case "04d":
      icon = <WiCloudy className={className} />;
      break;
    case "09d":
      icon = <WiRain className={className} />;
      break;
    case "10d":
      icon = <WiDayRain className={className} />;

      break;
    case "10n":
      icon = <WiNightAltRain className={className} />;

      break;
    case "11d":
      icon = <WiThunderstorm className={className} />;
      break;
    case "13d":
      icon = <WiSnowWind className={className} />;
      break;
    case "50n":
      icon = <WiDust className={className} />;
      break;
    default:
      icon = <WiDaySunny className={className} />;
  }

  return <div>{icon}</div>;
};

export default WeatherIcon;
