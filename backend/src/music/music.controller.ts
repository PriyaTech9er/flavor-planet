import { Controller, Get, Param } from '@nestjs/common';
import { MusicService } from './music.service';

@Controller('music')
export class MusicController {
  constructor(private musicService: MusicService) {}

  @Get(':name')
  async getMusic(@Param('name') name: string) {
    return this.musicService.getMusic(name);
  }
} 