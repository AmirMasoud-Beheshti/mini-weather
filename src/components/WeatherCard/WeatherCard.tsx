import React from 'react'
import MainWeather from '../MainWeather/MainWeather'
import WeatherFields from '../WeatherFields/WeatherFields'
import styles from './WeatherCard.module.scss'
const WeatherCard = () => {
  return (
    <div className={styles['card']}>
      <MainWeather/>
      <WeatherFields/>
    </div>
  )
}

export default WeatherCard