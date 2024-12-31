import { Suspense } from 'react';
import RealtimeWeather from '@/lib/realtime';
import { RealTimeProvider } from '@/lib/context/realtimeWeather';
import { getWeather } from '@/api';
import { WeatherResponse } from '@/lib/types';

const url =
  'https://weatherapi-com.p.rapidapi.com/current.json?q=Los%20Angeles';

export default async function Home() {
  const weather = await getWeather<WeatherResponse>(url);
  console.log('weather :>> ', weather);
  return (
    <Suspense fallback={<>Loading</>}>
      <RealTimeProvider initialData={weather}>
        <RealtimeWeather />
      </RealTimeProvider>
    </Suspense>
  );
}
