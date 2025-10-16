// noinspection SpellCheckingInspection

interface WeatherTypes {
    location: {
        name: string;
        region: string;
    }
    current: {
        temp_f: number;
        feelslike_f: number;
        humidity: number;
        pressure_in: number;
        wind_dir: string;
        wind_mph: number;
        precip_in: number;
        dewpoint_f: number;
        vis_miles: number;
        uv: number;
        condition: {
            text: string;
            icon: string;
        };
    }
    forecast: {
        forecastday: [{
            date: string;
            day: {
                maxtemp_f: number;
                mintemp_f: number;
                maxwind_mph: number;
                totalprecip_in: number;
                daily_chance_of_rain: number;
                condition: {
                    text: string;
                    code: number;
                }
                uv: number;
            }
            astro: {
                sunrise: string;
                sunset: string;
            }
        }]
    }
}


export class WeatherModel {
    temperature: number;
    sky: string;
    icon: string;
    city: string;
    state: string;
    feelsLikeTemp: number;
    humidity: number;
    pressure: number;
    windSpeed: number;
    windDirection: string;
    precipitation: number;
    dewPoint: number;
    visibility: number;
    uvIndex: number;
    sunriseDay0: string;
    sunsetDay0: string;
    highTempDay0: number;
    lowTempDay0: number;
    windsTempDay0: number;
    rainDay0: number;
    rainChanceDay0: number;
    skyDay0: string;
    uvIndexDay0: number;
    skyCodeDay0: number;


    constructor(data: WeatherTypes) {
        this.temperature = data.current?.temp_f ?? 0;
        this.sky = data.current?.condition?.text ?? '';
        this.icon = data.current?.condition?.icon ?? '';
        this.city = data.location?.name ?? '';
        this.state = data.location?.region ?? '';
        this.feelsLikeTemp = data.current?.feelslike_f ?? 0;
        this.humidity = data.current?.humidity ?? 0;
        this.pressure = data.current?.pressure_in ?? 0;
        this.windSpeed = data.current?.wind_mph ?? 0;
        this.windDirection = data.current?.wind_dir ?? '';
        this.precipitation = data.current?.precip_in ?? 0;
        this.dewPoint = data.current?.dewpoint_f ?? 0;
        this.visibility = data.current?.vis_miles ?? 0;
        this.uvIndex = data.current?.uv ?? 0;
        this.sunriseDay0 = data.forecast.forecastday[0].astro.sunrise[0] === "0" ? data.forecast.forecastday[0].astro.sunrise.slice(1) : data.forecast.forecastday[0].astro.sunrise;
        this.sunsetDay0= data.forecast.forecastday[0].astro.sunset[0] === "0" ? data.forecast.forecastday[0].astro.sunset.slice(1) : data.forecast.forecastday[0].astro.sunset
        this.highTempDay0 = data.forecast.forecastday[0].day.maxtemp_f;
        this.lowTempDay0 = data.forecast.forecastday[0].day.mintemp_f;
        this.rainDay0 = data.forecast.forecastday[0].day.totalprecip_in;
        this.windsTempDay0 = data.forecast.forecastday[0].day.maxwind_mph;
        this.rainChanceDay0 = data.forecast.forecastday[0].day.daily_chance_of_rain;
        this.skyDay0 = data.forecast.forecastday[0].day.condition.text;
        this.skyCodeDay0 = data.forecast.forecastday[0].day.condition.code;
        this.uvIndexDay0 = data.forecast.forecastday[0].day.uv;
    }
}
