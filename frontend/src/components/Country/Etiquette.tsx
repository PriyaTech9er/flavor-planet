import { observer } from 'mobx-react-lite';
import countryStore from '../../stores/CountryStore';

const Etiquette = observer(() => (
  <div>
    <h4>Etiquette</h4>
    <p>{countryStore.etiquette}</p>
  </div>
));

export default Etiquette; 