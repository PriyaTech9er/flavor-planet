import { Injectable } from '@nestjs/common';
import { OpenaiService } from '../openai/openai.service';

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

    return { food, fact, etiquette };
  }
} 