import { observer } from 'mobx-react-lite';
import countryStore from '../../stores/CountryStore';

const StreetFood = observer(() => (
  <div>
    <h4>Street Food</h4>
    <p>{countryStore.food}</p>
  </div>
));

export default StreetFood; 