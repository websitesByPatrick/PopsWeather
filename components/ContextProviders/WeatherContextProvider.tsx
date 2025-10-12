import React, {useEffect, useState} from 'react';
import {WeatherModel} from "@/library/WeatherModel";


export const WeatherContext = React.createContext<WeatherModel | null>(null);

const WeatherContextProvider = ({children}: { children: React.ReactNode }) => {

    const [weatherData, setWeatherData] = useState<WeatherModel | null>(null);
    const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;
    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=77389&aqi=no`;

    useEffect(() => {
        // Fetch weather data from an API
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();

                setWeatherData(new WeatherModel(data));
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };
        fetchWeatherData().then(

        );
    }, [API_URL]);


    if (!weatherData) return <></>;


    return (

        <WeatherContext.Provider value={weatherData}>
            {children}
        </WeatherContext.Provider>
    )
}
export default WeatherContextProvider