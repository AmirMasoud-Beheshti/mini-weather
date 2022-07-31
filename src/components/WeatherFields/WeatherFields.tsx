import React, { useEffect } from "react";
import MetricsCard, { MetricsCardProps } from "./MetricsCard/MetricsCard";
import "./WeatherFields.scss";

import { useDispatch, useSelector } from "react-redux";
import WeatherForm from "./WeatherForm/WeatherForm";
import { AppDispatch, TRootState } from "../../store/store";
import { fetchWeather, selectCurrentWeather } from "./metricsFieldsSlice";
import { Status } from "../../constants/interfaces";
const WeatherFields = () => {
  const dispatch = useDispatch<AppDispatch>();
  const weatherStatus = useSelector<TRootState>(
    (state) => state.metricsFields.status
  );
  const currentWeather = useSelector(selectCurrentWeather);
  useEffect(() => {
    if (weatherStatus === Status.Idle) {
      dispatch(fetchWeather());
    }
  }, [weatherStatus]);
  const currentWeatherDetails: MetricsCardProps[] = [
    {
      title: "humidity",
      value: currentWeather?.humidity as number,
      unit: "%",
      imageSrc: "images/humidity.png",
    },
    {
      title: "Wind Speed",
      value: currentWeather?.wind_speed as number,
      unit: "m/s",
      imageSrc: "images/wind-spedd.png",
    },
    {
      title: "Wind Direction",
      value: currentWeather?.wind_deg as number,
      unit: "deg",
      imageSrc: "images/wind-direction.png",
    },
    {
      title: "sunset",
      value: currentWeather?.sunset as number,
      imageSrc: "images/sunset.png",
    },
    {
      title: "humidity",
      value: currentWeather?.sunrise as number,
      imageSrc: "images/sunrise.png",
    },
    {
      title: "visibility",
      value: currentWeather?.visibility as number,
      unit: "km",
      imageSrc: "images/visibilty.png",
    },
  ];
  const renderedCurrentFields = currentWeatherDetails.map((field) => (
    <MetricsCard
      title={field.title}
      imageSrc={field.imageSrc}
      value={field.value}
      unit={field.unit}
      key={field.title}
    />
  ));
  return (
    <div className="weather-container">
      <WeatherForm />
      <div className="weather-fields">{renderedCurrentFields}</div>
    </div>
  );
};

export default WeatherFields;
