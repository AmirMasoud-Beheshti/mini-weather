import React from "react";
import CardLocation from "./CardLoacation/CardLocation";
import CardTemperature from "./CardTemperature/CardTemperature";
import styles from "./MainWeather.module.scss";
export interface MainWeatherProps {
  location?: string;
  weatherDescription?: string;
  weatherImage?: string;
  temperature?: string;
  feelsLike?: string;
}
const MainWeather = (props: MainWeatherProps) => {
  const {
    location = "Tehran",
    weatherDescription = "few cloudes",
    weatherImage = "/images/sunny.png",
    temperature = "21°C",
    feelsLike='Feels like 21°C'
  } = props;
  return (
    <div className={styles["main-weather"]}>
      <CardLocation />
      <img src={weatherImage} alt="" />
      <CardTemperature temperature={temperature} feelsLike={feelsLike} />
    </div>
  );
};

export default MainWeather;
