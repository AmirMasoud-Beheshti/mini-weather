import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import { MetricsCardProps } from "./MetricsCard/MetricsCard";

const initialState: MetricsCardProps[] = [
  {
    title: "Humidity",
    value: "20",
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
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async () => {
    const response = axios.get(
      "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&unit=metric&appid=190ed9c24baf34967202a15934120510"
    )
    console.log(response,'redux thunk');
    
    return response
  }
);
const metricsFieldsSlice = createSlice({
  name: "weatherFields",
  initialState,
  reducers: {},
});
export const selectMetricsField = (state: any) => state.metricsFields;
export default metricsFieldsSlice.reducer;
