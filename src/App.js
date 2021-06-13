import React, { useEffect, useState } from "react";

import Weather from "./components/Weather.js";
import { WiDaySunny } from "react-icons/wi";

const App = () => {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(!result.cod ? result : undefined);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <>
      {" "}
      {data !== undefined ? (
        <Weather data={data.current} timezone={data.timezone} daily={data.daily} hourly={data.hourly} />
      ) : (
        <div className="container">
          <div className="currentWeather">
            <div className="weatherInfo">
              <div className="weatherIcon">
                <WiDaySunny className="iconLoad" />
              </div>
              <div className="weatherDetails"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
