import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef,
  Input,
} from '@angular/core';
import { ItemService } from '@core/services/item.service';
import { Item } from '@app/core/models/item';
import { LoggerService } from '@app/core/services/logger.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { getRandomInt } from '@shared/utils/helpers';


@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
})
export class PosterComponent implements OnInit {
  @Input() poster: Item;

  @ViewChildren('posterElement') posterElement: QueryList<ElementRef>;

  constructor(
    private itemService: ItemService,
    private logger: LoggerService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    // this.posterElement.first.nativeElement.drasggable = true;

    this.posterElement.forEach((poster) => {
      // console.log('PosterElement', poster);
      poster.nativeElement.draggable = true;
      poster.nativeElement.style.top = `${getRandomInt(9)}px`;
      poster.nativeElement.style.bottom = `${getRandomInt(9)}px`;
      poster.nativeElement.style.right = `${getRandomInt(9)}px`;
      poster.nativeElement.style.left = `${getRandomInt(9)}px`;
      poster.nativeElement.style.transform = `rotate(${getRandomInt(5)}deg)`;
    });
  }
  openPoster(poster: Item): void {
    this.logger.info('PosterComponent: open poster', poster._id);
    const dialogRef = this.dialog.open(ModalComponent, {
      maxHeight: '100vh',
      maxWidth: '100%',
      data: poster,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.logger.info('PosterComponent: close poster', result);
      // TO DO: post accepted poster result to user's mission list
    });
  }
}
