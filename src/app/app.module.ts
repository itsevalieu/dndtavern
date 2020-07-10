import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';

import { AppComponent } from './app.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { NavComponent } from '@shared/components/nav/nav.component';
import { BulletinComponent } from '@modules/pages/bulletin/bulletin.component';
import { BarkeepComponent } from '@modules/pages/barkeep/barkeep.component';
import { PosterComponent } from './modules/components/poster/poster.component';
import { DialogueComponent } from './modules/components/dialogue/dialogue.component';
import { LoggerService } from './core/services/logger.service';
import { ConsoleLoggerService } from './core/services/console-logger.service';

@NgModule({
  declarations: [
    AppComponent,
    BulletinComponent,
    BarkeepComponent,
    PosterComponent,
    DialogueComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
  ],
  providers: [{ provide: LoggerService, useClass: ConsoleLoggerService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
