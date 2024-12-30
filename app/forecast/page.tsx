import { Suspense } from 'react';
import Forecast from '@/lib/forecast';

export default async function Home() {
  return (
    <Suspense fallback={<>Loading</>}>
      <Forecast />
    </Suspense>
  );
}
