export type WeatherResponse = {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_mph: number;
    wind_dir: string;
    precip_in: number;
    humidity: number;
    feelslike_f: number;
  };
};
