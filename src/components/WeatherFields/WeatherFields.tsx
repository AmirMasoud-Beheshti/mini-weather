import React from "react";
import MetricsCard, { MetricsCardProps } from "./MetricsCard/MetricsCard";
import "./WeatherFields.scss";
import WeatherForm from "./WeatherForm/WeatherForm";
const WeatherFields = () => {
  const metricsData: MetricsCardProps[] = [
    {
      title: "Humidity",
      value: "17",
      unit: "%",
      imageSrc: "/images/sunny.png",
    },
    {
      title: "Humidity",
      value: "17",
      unit: "%",
      imageSrc: "/images/sunny.png",
    },
    {
      title: "Humidity",
      value: "17",
      unit: "%",
      imageSrc: "/images/sunny.png",
    },
    {
      title: "Humidity",
      value: "17",
      unit: "%",
      imageSrc: "/images/sunny.png",
    },
    {
      title: "Humidity",
      value: "17",
      unit: "%",
      imageSrc: "/images/sunny.png",
    },
    {
      title: "Humidity",
      value: "17",
      unit: "%",
      imageSrc: "/images/sunny.png",
    },
  ];
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
      <div>{renderedFields}</div>
    </div>
  );
};

export default WeatherFields;
