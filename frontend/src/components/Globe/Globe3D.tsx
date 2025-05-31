import dynamic from 'next/dynamic';
import { useRef, useEffect } from 'react';
import countryStore from '../../stores/CountryStore';
import { observer } from 'mobx-react-lite';

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

const countries = [
  { name: 'Italy', lat: 41.8719, lng: 12.5674 },
  { name: 'Japan', lat: 36.2048, lng: 138.2529 },
  { name: 'Brazil', lat: -14.2350, lng: -51.9253 },
  { name: 'India', lat: 20.5937, lng: 78.9629 },
  { name: 'Mexico', lat: 23.6345, lng: -102.5528 },
  // Add more countries as needed
];

const Globe3D = observer(() => {
  const globeEl = useRef<any>();

  // Focus globe on selected country
  useEffect(() => {
    if (countryStore.selectedCountry) {
      const country = countries.find(
        c => c.name === countryStore.selectedCountry
      );
      if (country && globeEl.current && typeof globeEl.current.pointOfView === 'function') {
        globeEl.current.pointOfView(
          { lat: country.lat, lng: country.lng, altitude: 1.5 },
          1000
        );
      }
    }
  }, [countryStore.selectedCountry]);

  return (
    <div style={{ height: 400 }}>
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundColor="rgba(0,0,0,0)"
        pointsData={countries}
        pointLat="lat"
        pointLng="lng"
        pointLabel="name"
        pointColor={() => 'orange'}
        pointAltitude={0.05}
        onPointClick={(point: { name: string; lat: number; lng: number }) => {
          countryStore.setCountry(point.name);
        }}
      />
    </div>
  );
});

export default Globe3D; 