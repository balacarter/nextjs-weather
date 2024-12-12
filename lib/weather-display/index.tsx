import Image from 'next/image';
import { WeatherResponse } from '../types';
import styles from './weather.module.css';

export default function DisplayWeather({
  weather,
}: {
  weather: WeatherResponse;
}) {
  return (
    <div className={styles.weatherContainer}>
      <div className={styles.weatherRow}>
        <div className={styles.weatherTemp}>
          <Image
            src={`https:${weather.current.condition.icon}`}
            alt="Weather conditions icon"
            width={64}
            height={64}
          />
          <h2>{`${weather.current.temp_f}º`}</h2>
        </div>
        <div className={styles.weatherRow}>
          <span>Feels like: {weather.current.feelslike_f}º</span>
          <span>Precip (in): {weather.current.precip_in}&quot;</span>
          <span>Humidity: {weather.current.humidity}</span>
          <span>
            Wind: {weather.current.wind_mph}mph {weather.current.wind_dir}
          </span>
        </div>
      </div>
      <div
        className={styles.weatherRow}
        style={{ position: 'absolute', bottom: '5px', right: '8px' }}
      >
        <span>
          {weather.location.name} {weather.location.region}
        </span>
      </div>
    </div>
  );
}
