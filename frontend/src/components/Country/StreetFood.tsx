import { observer } from 'mobx-react-lite';
import countryStore from '../../stores/CountryStore';

const StreetFood = observer(() => (
  <div>
    <h4>Street Food</h4>
    {countryStore.foodImage && (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
        <img
          src={countryStore.foodImage}
          alt={(countryStore.food ? countryStore.food.split(':')[0] : countryStore.selectedCountry + ' street food')}
          style={{ maxWidth: 320, width: '100%', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
        />
      </div>
    )}
    <p>{countryStore.food}</p>
  </div>
));

export default StreetFood; 