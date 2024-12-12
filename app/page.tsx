import { Suspense } from 'react';
import { WeatherResponse } from '@/lib/types';
import DisplayWeather from '@/lib/weather-display';

const url =
  'https://weatherapi-com.p.rapidapi.com/current.json?q=Los%20Angeles';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '3bcadb2682msh79b4d160e953989p10cd15jsn8ff40558378d',
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
  },
};

export default async function Home() {
  const data = await fetch(url, options);
  const weather: WeatherResponse = await data.json();
  console.log('weather :>> ', weather);

  return (
    <Suspense fallback={<>Loading</>}>
      <DisplayWeather weather={weather} />
    </Suspense>
  );
}
