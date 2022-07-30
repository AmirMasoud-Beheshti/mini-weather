export enum Status {
  Idle = "IDLE",
  Loading = "LOADING",
  Succeeded = "SUCCEEDED",
  Failed = "FAILED",
}
export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface ICurrentWeather {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: IWeather[];
}
export interface IWeatherInitialState {
  status: Status;
  currentWeather: ICurrentWeather | null;
  error:string
}
