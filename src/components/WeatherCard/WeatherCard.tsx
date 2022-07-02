import React from 'react'
import MainWeather from '../MainWeather/MainWeather'
import WeatherFields from '../WeatherFields/WeatherFields'
import './WeatherCard.scss'
const WeatherCard = () => {
  return (
    <div className='card'>
      <MainWeather/>
      <WeatherFields/>
    </div>
  )
}

export default WeatherCard