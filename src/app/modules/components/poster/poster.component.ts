import { Component, OnInit } from '@angular/core';
import { PosterService } from '@core/services/poster.service';
import { Poster } from '@core/models/poster';
import { LoggerService } from '@app/core/services/logger.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '@shared/components/modal/modal.component';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
})
export class PosterComponent implements OnInit {
  public posters: Poster[] = [];

  constructor(
    private posterService: PosterService,
    private logger: LoggerService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getPosters();
  }
  getPosters(): void {
    this.logger.info('PosterComponent: getting posters.');
    this.posterService
      .getPosters()
      .subscribe((posters) => (this.posters = posters));
  }
  openPoster(poster: Poster): void {
    this.logger.info('PosterComponent: open poster', poster);
    this.dialog.open(ModalComponent, {
      data: poster,
    });
  }
}
