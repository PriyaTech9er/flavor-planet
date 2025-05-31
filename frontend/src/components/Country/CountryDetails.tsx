import { observer } from 'mobx-react-lite';
import countryStore from '../../stores/CountryStore';
import StreetFood from './StreetFood';
import CulturalFact from './CulturalFact';
import MusicPlayer from './MusicPlayer';

const CountryDetails = observer(() => (
  <div>
    <h2>{countryStore.selectedCountry}</h2>
    <StreetFood />
    <CulturalFact />
    <MusicPlayer />
  </div>
));

export default CountryDetails; 