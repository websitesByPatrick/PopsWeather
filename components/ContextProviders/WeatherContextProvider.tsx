import React, { useEffect, useState } from "react";
import { WeatherModel } from "@/library/WeatherModel";
import axios from "axios";

export const WeatherContext = React.createContext<WeatherModel | null>(null);
export const CityContext = React.createContext<string>("75503");
const WeatherContextProvider = ({
  children,
  searchCity,
}: {
  children: React.ReactNode;
  searchCity: string;
}) => {
  const [weatherData, setWeatherData] = useState<WeatherModel | null>(null);

  const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;
  const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchCity}&days=3&aqi=no`;

  useEffect(() => {
    // Fetch weather data from an API
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(API_URL);
        setWeatherData(new WeatherModel(response.data));
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeatherData().then();
  }, [API_URL]);

  if (!weatherData) return <></>;

  return (
    <WeatherContext.Provider value={weatherData}>
      {children}
    </WeatherContext.Provider>
  );
};
export default WeatherContextProvider;
