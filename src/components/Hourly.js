import React from "react";

const Hourly = (props) => {
  let unix = props.hourly.dt;
  let date = new Date(unix * 1000);
  let hours = date.getHours();
  let formattedTime = hours;
  /*let time = formattedTime.filter((i) => i % 3 == 0);*/

  console.log(props.hourly);
  return (
    <>
      <div className="hourConditions">
        <div className="conditionsH" style={{ height: window.innerWidth < 360 ? props.hourly.temp * 1 : props.hourly.temp * 1.5 }}>
          <p>{Math.round(props.hourly.temp)}°</p>
        </div>
      </div>
      <div className="hours">
        {" "}
        <p>{formattedTime}h</p>
      </div>
    </>
  );
};

export default Hourly;
