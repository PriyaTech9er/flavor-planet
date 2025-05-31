import { makeAutoObservable } from 'mobx';
import api from '../services/api';

class MusicStore {
  music = '';
  isPlaying = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchMusic(name: string) {
    const res = await api.get(`/music/${name}`);
    this.music = res.data;
  }

  play() { this.isPlaying = true; }
  pause() { this.isPlaying = false; }
}

export default new MusicStore(); 