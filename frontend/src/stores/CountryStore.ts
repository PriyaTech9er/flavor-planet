import { makeAutoObservable } from 'mobx';
import api from '../services/api';

class CountryStore {
  selectedCountry = '';
  food = '';
  fact = '';
  etiquette = '';

  constructor() {
    makeAutoObservable(this);
  }

  setCountry(name: string) {
    this.selectedCountry = name;
    this.fetchCountryData(name);
  }

  async fetchCountryData(name: string) {
    const res = await api.get(`/country/${name}`);
    this.food = res.data.food;
    this.fact = res.data.fact;
    this.etiquette = res.data.etiquette;
  }
}

export default new CountryStore(); 