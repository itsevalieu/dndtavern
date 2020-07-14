import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { ButtonComponent } from './components/button/button.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ModalComponent, ButtonComponent],
  imports: [CommonModule, MatDialogModule],
  exports: [ModalComponent, ButtonComponent],
})
export class SharedModule {}
