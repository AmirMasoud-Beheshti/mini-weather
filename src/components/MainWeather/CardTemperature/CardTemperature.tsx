import React from "react";
import styles from "./CardTemperature.module.scss";
export interface CardTemperatureProps {
  temperature?: string;
  feelsLike?: string;
}
const CardTemperature = (props: CardTemperatureProps) => {
  const { temperature, feelsLike } = props;
  return (
    <div className={styles["temperature"]}>
      <h3 className={styles["temperature__amount"]}>{temperature}</h3>
      <div className={styles["temperature__feels"]}>{feelsLike}</div>
    </div>
  );
};

export default CardTemperature;
