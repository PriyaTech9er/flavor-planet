import { observer } from 'mobx-react-lite';
import countryStore from '../../stores/CountryStore';

const CulturalFact = observer(() => (
  <div>
    <h4>Cultural Fact</h4>
    <p>{countryStore.fact}</p>
    <h5>Etiquette</h5>
    <p>{countryStore.etiquette}</p>
  </div>
));

export default CulturalFact; 