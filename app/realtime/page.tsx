import { Suspense } from 'react';
import RealtimeWeather from '@/lib/realtime';

export default async function Home() {
  return (
    <Suspense fallback={<>Loading</>}>
      <RealtimeWeather />
    </Suspense>
  );
}
