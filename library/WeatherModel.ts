// noinspection SpellCheckingInspection

interface WeatherTypes {
  location: {
    name: string;
    region: string;
  };
  current: {
    temp_f: number;
  };

  forecast: {
    forecastday: [
      {
        day: {
          maxtemp_f: number;
          mintemp_f: number;
        };
      },
    ];
  };
}

export class WeatherModel {
  city: string;
  state: string;
  temperature: number;
  dailyForecast: [
      { day:
              { maxtemp_f: number
              , mintemp_f: number}
      }
  ];

  constructor(data: WeatherTypes) {
    this.city = data.location.name ?? "";
    this.state = data.location.region ?? "";
    this.temperature = data.current.temp_f ?? "";
    this.dailyForecast = data.forecast.forecastday ?? "";
  }
}
