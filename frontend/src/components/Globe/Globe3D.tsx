import dynamic from 'next/dynamic';
import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import countryStore from '../../stores/CountryStore';
import { observer } from 'mobx-react-lite';
import { countries } from '../../utils/countryList';

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

const Globe3D = forwardRef((props, ref) => {
  const globeEl = useRef<any>();

  // Expose methods through ref
  useImperativeHandle(ref, () => ({
    spin: () => {
      if (globeEl.current && typeof globeEl.current.controls === 'object') {
        globeEl.current.controls.autoRotate = true;
        globeEl.current.controls.autoRotateSpeed = 2;
        setTimeout(() => {
          if (globeEl.current && typeof globeEl.current.controls === 'object') {
            globeEl.current.controls.autoRotate = false;
          }
        }, 2000);
      }
    }
  }));

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
    <div style={{ height: 500 }}>
      <Globe
        ref={globeEl}
        width={500}
        height={500}
        globeImageUrl="//unpkg.com/three-globe@2.42.8/example/img/earth-day.jpg"
        backgroundColor="rgba(0,0,0,0)"
        pointsData={countries}
        pointLat="lat"
        pointLng="lng"
        pointLabel="name"
        pointColor={() => 'orange'}
        pointAltitude={0.05}
        enablePointerInteraction={true}
        onPointClick={(point: { name: string; lat: number; lng: number }) => {
          countryStore.setCountry(point.name);
        }}
      />
    </div>
  );
});

Globe3D.displayName = 'Globe3D';

export default observer(Globe3D); 