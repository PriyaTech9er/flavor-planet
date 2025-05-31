import { useState, useRef } from 'react';
import countryStore from '../stores/CountryStore';
import musicStore from '../stores/MusicStore';
import CountryDetails from '../components/Country/CountryDetails';
import SpinButton from '../components/Globe/SpinButton';
import Globe3D from '../components/Globe/Globe3D';
import styles from './index.module.scss';
import { countries } from '../utils/countryList';
// import './index.scss';

const countryNames = countries.map(c => c.name);

export default function Home() {
  const [spinning, setSpinning] = useState(false);
  const globeRef = useRef<any>(null);

  const spinGlobe = () => {
    setSpinning(true);
    let random;
    do {
      random = countryNames[Math.floor(Math.random() * countryNames.length)];
    } while (random === countryStore.selectedCountry && countryNames.length > 1);
    countryStore.setCountry(random);
    musicStore.fetchMusic(random);
    setTimeout(() => setSpinning(false), 1000);
  };

  return (
    <div className={styles['world-explorer']}>
      <h1 className={styles['world-explorer__title']}>Flavor Planet</h1>
      <div>
        <p className={styles['world-explorer__subtitle']}>
          Discover the world through music and culture.
        </p>
      </div>
      <div className={styles['world-globe']}>
        <div>
          <SpinButton onSpin={spinGlobe} globeRef={globeRef} />
        </div>
        <div className={styles['world-explorer__globe-container']}>
          <Globe3D ref={globeRef} />
        </div>
      </div>

      <div className={styles['world-explorer__country-details']}>
        <CountryDetails />
      </div>
    </div>
  );
} 