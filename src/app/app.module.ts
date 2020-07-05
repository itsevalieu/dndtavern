import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BulletinComponent } from './bulletin/bulletin.component';
import { BarkeepComponent } from './barkeep/barkeep.component';
import { PosterComponent } from './poster/poster.component';
import { ModalComponent } from './modal/modal.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BulletinComponent,
    BarkeepComponent,
    PosterComponent,
    ModalComponent,
    DialogueComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
