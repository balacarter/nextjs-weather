import { Suspense } from 'react';
import DisplayWeather from '@/lib/weather-display';

export default async function Home() {
  return (
    <Suspense fallback={<>Loading</>}>
      <DisplayWeather />
    </Suspense>
  );
}
