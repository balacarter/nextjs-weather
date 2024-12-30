import { WeatherResponse } from '@/lib/types';

const testData: WeatherResponse = {};

export const getWeather = async <T>(url: string): Promise<T> => {
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': `${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
    },
  };
  try {
    // const response = testData;
    // return await response.json();
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    console.log('got error');
    return error as T;
  }
};
