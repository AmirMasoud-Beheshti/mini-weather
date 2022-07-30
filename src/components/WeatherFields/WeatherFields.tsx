import React, { useEffect } from "react";
import MetricsCard, { MetricsCardProps } from "./MetricsCard/MetricsCard";
import "./WeatherFields.scss";

import { useDispatch, useSelector } from "react-redux";
import WeatherForm from "./WeatherForm/WeatherForm";
import { AppDispatch, TRootState } from "../../store/store";
import { fetchWeather, selectCurrentWeather } from "./metricsFieldsSlice";
import { ICurrentWeather, Status } from "../../constants/interfaces";
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


  return (
    <div>
      <WeatherForm />
      <div className="weather-fields">{}</div>
    </div>
  );
};

export default WeatherFields;
