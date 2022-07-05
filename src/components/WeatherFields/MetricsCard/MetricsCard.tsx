import React from "react";

export interface MetricsCardProps {
  title: string;
  value: string;
  unit?: string;
  imageSrc?:string
}
const MetricsCard = (props: MetricsCardProps) => {
  const { title, value, unit,imageSrc } = props;
  return (
    <div>
      <div>{title}</div>
      <div>
        <div>
          <div>{value}</div>
          <div>{unit}</div>
        </div>
        <div><img src={imageSrc} alt="" /></div>
      </div>
    </div>
  );
};

export default MetricsCard;
