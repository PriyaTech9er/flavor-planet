import { Injectable } from '@nestjs/common';
import { OpenaiService } from '../openai/openai.service';

// Static mapping of country names to food image URLs
const foodImages: Record<string, string> = {
  Italy: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
  Japan: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80',
  India: 'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=600&q=80',
  Mexico: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80',
  France: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80',
  USA: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80',
  // Add more countries as needed
};

@Injectable()
export class CountryService {
  constructor(private openai: OpenaiService) {}

  async getCountryData(name: string) {
    const foodPrompt = `Give me a popular street food from ${name}, with ingredients, steps, and if it's vegetarian, spicy, or contains allergens.`;
    const factPrompt = `Share a unique food-related cultural fact or tradition from ${name}.`;
    const etiquettePrompt = `Describe a popular mealtime custom or food etiquette in ${name}.`;

    const [food, fact, etiquette] = await Promise.all([
      this.openai.askOpenAI(foodPrompt),
      this.openai.askOpenAI(factPrompt),
      this.openai.askOpenAI(etiquettePrompt),
    ]);

    // Extract food name (before the first colon or period)
    let foodName = name;
    if (typeof food === 'string') {
      const match = food.match(/^([^.:\n]+)/);
      if (match) {
        foodName = match[1].trim();
      }
    }

    // Generate food image using OpenAI
    const imagePrompt = `A high quality, appetizing photo of ${foodName}, traditional street food from ${name}, on a plate.`;
    const foodImage = await this.openai.generateImage(imagePrompt);

    return { food, foodImage, fact, etiquette };
  }
} 