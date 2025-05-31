import { observer } from 'mobx-react-lite';
import { Spinner } from 'react-bootstrap';
import countryStore from '../../stores/CountryStore';
import StreetFood from './StreetFood';
import CulturalFact from './CulturalFact';
import Etiquette from './Etiquette';
import MusicPlayer from './MusicPlayer';

const CountryDetails = observer(() => {
  if (countryStore.isLoading) {
    return (
      <div className="text-center p-5">
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-3">Loading country details...</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{countryStore.selectedCountry}</h2>
      <StreetFood />
      <CulturalFact />
      <Etiquette />
      <MusicPlayer />
    </div>
  );
});

export default CountryDetails; 