import React from "react";

const HourlyPrec = (props) => {
  let unix = props.hourly.dt;
  let date = new Date(unix * 1000);
  let hours = date.getHours();
  let formattedTime = hours;

  return (
    <>
      <div className="hourConditionsPrec">
        <div
          className="conditionsHprec"
          style={{
            height: window.innerWidth < 360 ? Math.round(props.hourly.pop) * 1 : props.hourly.pop * 1.5,
          }}
        >
          <p>{Math.round(props.hourly.pop)}%</p>
        </div>
      </div>
      <div className="hoursPrec">
        {" "}
        <p>{formattedTime}h</p>
      </div>
    </>
  );
};

export default HourlyPrec;
