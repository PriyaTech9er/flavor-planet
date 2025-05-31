import { Injectable } from '@nestjs/common';
import { OpenaiService } from '../openai/openai.service';

@Injectable()
export class MusicService {
  constructor(private openai: OpenaiService) {}

  async getMusic(name: string) {
    const prompt = `Suggest a traditional or iconic song from ${name} with a YouTube or Spotify link if possible.`;
    return this.openai.askOpenAI(prompt);
  }
} 