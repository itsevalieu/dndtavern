import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { NavComponent } from '@shared/components/nav/nav.component';
import { BulletinComponent } from '@modules/pages/bulletin/bulletin.component';
import { PosterComponent } from './modules/components/poster/poster.component';
import { DialogueComponent } from './modules/components/dialogue/dialogue.component';
import { LoggerService } from './core/services/logger.service';
import { ConsoleLoggerService } from './core/services/console-logger.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { BarComponent } from './modules/pages/bar/bar.component';
import { CreateItemComponent } from './modules/components/forms/create-item/create-item.component';
import { LoginComponent } from './modules/components/forms/login/login.component';
import { CreateUserComponent } from './modules/components/forms/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    BulletinComponent,
    BarComponent,
    PosterComponent,
    DialogueComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    CreateItemComponent,
    LoginComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [{ provide: LoggerService, useClass: ConsoleLoggerService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
