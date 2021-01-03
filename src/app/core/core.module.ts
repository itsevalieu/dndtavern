import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemService } from './services/item.service';
import { LoggerService } from './services/logger.service';

@NgModule({
  declarations: [],
  providers: [ItemService, LoggerService],
  imports: [CommonModule],
})
export class CoreModule {}
