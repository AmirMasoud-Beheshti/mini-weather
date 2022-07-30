import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IWeatherInitialState, Status } from "../../constants/interfaces";
import { TRootState } from "../../store/store";

const initialState: IWeatherInitialState = {
  status: Status.Idle,
  currentWeather: null,
  error: "",
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (unit: string = "metric") => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&unit=${unit}&appid=190ed9c24baf34967202a15934120510`
    );
    return response.data.current;
  }
);

const metricsFieldsSlice = createSlice({
  name: "weatherFields",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = Status.Succeeded;
        state.currentWeather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = Status.Failed;
        state.error = action.error.message as string;
      });
  },
});

export const selectCurrentWeather = (state: TRootState) =>
  state.metricsFields.currentWeather;
export default metricsFieldsSlice.reducer;
