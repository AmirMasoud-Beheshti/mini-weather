import React from 'react';
import  styles from './App.module.scss'
import WeatherCard from './components/WeatherCard/WeatherCard';
function App() {
  return (
    <div className={styles['app']}>
      <WeatherCard/>
    </div>
  );
}

export default App;
