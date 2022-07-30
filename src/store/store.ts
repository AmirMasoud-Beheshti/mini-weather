import { configureStore } from "@reduxjs/toolkit";
import metricsFieldsSlice from "../components/WeatherFields/metricsFieldsSlice";

export const store = configureStore({
  reducer: { metricsFields: metricsFieldsSlice },
});

export type TRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

