import { useState } from 'react';
import countryStore from '../stores/CountryStore';
import musicStore from '../stores/MusicStore';
import CountryDetails from '../components/Country/CountryDetails';
import SpinButton from '../components/Globe/SpinButton';
import Globe3D from '../components/Globe/Globe3D';

const countries = ['Italy', 'Japan', 'Brazil', 'India', 'Mexico']; // Example

export default function Home() {
  const [spinning, setSpinning] = useState(false);

  const spinGlobe = () => {
    setSpinning(true);
    const random = countries[Math.floor(Math.random() * countries.length)];
    countryStore.setCountry(random);
    musicStore.fetchMusic(random);
    setTimeout(() => setSpinning(false), 1000);
  };

  return (
    <div className="container mt-4">
      <h1>World Explorer</h1>
      <SpinButton onSpin={spinGlobe} />
      <div className="mb-4">
        <Globe3D />
      </div>
      <CountryDetails />
    </div>
  );
} 