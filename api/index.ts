const testData = {
  location: {
    name: 'Los Angeles',
    region: 'California',
    country: 'United States of America',
    lat: 34.0522,
    lon: -118.2428,
    tz_id: 'America/Los_Angeles',
    localtime_epoch: 1734033493,
    localtime: '2024-12-12 11:58',
  },
  current: {
    last_updated_epoch: 1734032700,
    last_updated: '2024-12-12 11:45',
    temp_c: 15.6,
    temp_f: 60.1,
    is_day: 1,
    condition: {
      text: 'Overcast',
      icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
      code: 1009,
    },
    wind_mph: 4.5,
    wind_kph: 7.2,
    wind_degree: 171,
    wind_dir: 'S',
    pressure_mb: 1015,
    pressure_in: 29.97,
    precip_mm: 0,
    precip_in: 0,
    humidity: 55,
    cloud: 100,
    feelslike_c: 15.6,
    feelslike_f: 60.1,
    windchill_c: 12.7,
    windchill_f: 54.9,
    heatindex_c: 13.2,
    heatindex_f: 55.7,
    dewpoint_c: 2.5,
    dewpoint_f: 36.6,
    vis_km: 16,
    vis_miles: 9,
    uv: 0.8,
    gust_mph: 5.1,
    gust_kph: 8.3,
  },
};

export const getWeather = async <T>(url: string): Promise<T> => {
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': `${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
    },
  };
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    return error as T;
  }
};
