'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './nav.module.css';

export function Nav() {
  const [active, setActive] = useState<string>('realtime');

  return (
    <div className={styles.navLinks}>
      <Link
        onClick={() => setActive('realtime')}
        className={active === 'realtime' ? styles.active : ''}
        href="/"
      >{`<-- Real Time`}</Link>
      <Link
        onClick={() => setActive('forecast')}
        className={active === 'forecast' ? styles.active : ''}
        href="/forecast/"
      >{`Forecast -->`}</Link>
    </div>
  );
}
