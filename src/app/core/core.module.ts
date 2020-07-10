import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosterService } from './services/poster.service';
import { LoggerService } from './services/logger.service';

@NgModule({
  declarations: [],
  providers: [PosterService, LoggerService],
  imports: [CommonModule],
})
export class CoreModule {}
