import React from 'react'
import './CardTemperature.scss'
export interface CardTemperatureProps{
  temperature?:string
  feelsLike?:string
}
const CardTemperature = (props:CardTemperatureProps) => {
  const {temperature,feelsLike} = props
  return (
    <div className='temperature'>
      <h3 className='temperature__amount'>{temperature}</h3>
      <div className='temperature__feels'>{feelsLike}</div>
    </div>
  )
}

export default CardTemperature