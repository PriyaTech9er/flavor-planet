import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Get(':name')
  async getCountryData(@Param('name') name: string) {
    return this.countryService.getCountryData(name);
  }
} 