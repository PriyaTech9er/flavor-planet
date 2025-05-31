import { makeAutoObservable } from 'mobx';
import api from '../services/api';

class CountryStore {
  selectedCountry = '';
  food = '';
  fact = '';
  etiquette = '';
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setCountry(name: string) {
    this.selectedCountry = name;
    this.fetchCountryData(name);
  }

  async fetchCountryData(name: string) {
    this.isLoading = true;
    try {
      const res = await api.get(`/country/${name}`);
      this.food = res.data.food;
      this.fact = res.data.fact;
      this.etiquette = res.data.etiquette;
    } catch (error) {
      console.error('Error fetching country data:', error);
    } finally {
      this.isLoading = false;
    }
  }
}

export default new CountryStore(); 