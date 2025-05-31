import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class OpenaiService {
  private apiKey = process.env.OPENAI_API_KEY;

  async askOpenAI(prompt: string) {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 300,
      },
      {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data.choices[0].message.content;
  }
} 