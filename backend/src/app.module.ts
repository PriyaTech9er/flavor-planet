import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CountryController } from './country/country.controller';
import { CountryService } from './country/country.service';
import { OpenaiService } from './openai/openai.service';
import { MusicController } from './music/music.controller';
import { MusicService } from './music/music.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [CountryController, MusicController],
  providers: [CountryService, OpenaiService, MusicService],
})
export class AppModule {} 