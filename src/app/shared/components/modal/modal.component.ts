import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { LoggerService } from '@app/core/services/logger.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {}

  closeModal(): void {
    this.logger.info('ModalComponent: closeModal() triggered');
    this.dialogRef.close();
  }
}
