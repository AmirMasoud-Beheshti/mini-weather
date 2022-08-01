import React from "react";
import styles from './MetricsCard.module.scss'
export interface MetricsCardProps {
  title: string;
  value: string | number;
  unit?: string;
  imageSrc?:string
}
const MetricsCard = (props: MetricsCardProps) => {
  const { title, value, unit,imageSrc } = props;
  return (
    <div className={styles["metrics-field"]}>
      <div>{title}</div>
      <div>
        <div>
          <div>{value}</div>
          <div>{unit}</div>
        </div>
      </div>
        <div><img src={imageSrc} alt="" className="img"/></div>
    </div>
  );
};

export default MetricsCard;
