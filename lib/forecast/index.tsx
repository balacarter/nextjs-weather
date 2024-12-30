'use client';

import { getWeather } from '@/api';
import { WeatherResponse } from '../types';
import { useEffect, useState } from 'react';

const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q='; //update

export default function Forecast() {
  const [location, setLocation] = useState('Los Angeles');
  const [weather, setWeather] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    getWeather<WeatherResponse>(`${url}${encodeURI(location)}`).then(
      (weather) => setWeather(weather)
    );
  });

  return weather && <></>;
}
