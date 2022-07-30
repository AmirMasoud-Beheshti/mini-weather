import React, { useEffect } from "react";
import MetricsCard, { MetricsCardProps } from "./MetricsCard/MetricsCard";
import "./WeatherFields.scss";

import { useDispatch, useSelector } from "react-redux";
import WeatherForm from "./WeatherForm/WeatherForm";
import { AppDispatch, TRootState } from "../../store/store";
import { fetchWeather } from "./metricsFieldsSlice";
const WeatherFields = () => {
  const dispatch = useDispatch<AppDispatch>()
  const metricsData: MetricsCardProps[] = useSelector(
    (state: TRootState) => state.metricsFields
  );
  useEffect(()=> {
    dispatch(fetchWeather())
  },[])
  const renderedFields = metricsData.map((item, index) => {
    return (
      <MetricsCard
        key={`metrics-${index}`}
        title={item.title}
        value={item.value}
        unit={item.unit}
        imageSrc={item.imageSrc}
      />
    );
  });
  return (
    <div>
      <WeatherForm />
      <div className="weather-fields">{renderedFields}</div>
    </div>
  );
};

export default WeatherFields;
