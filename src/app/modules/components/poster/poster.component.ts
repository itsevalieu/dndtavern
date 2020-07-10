import { Component, OnInit } from '@angular/core';
import { PosterService } from '@core/services/poster.service';
import { Poster } from '@core/models/poster';
@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
})
export class PosterComponent implements OnInit {
  public posters: Poster[] = [];

  constructor(private posterService: PosterService) {}

  ngOnInit(): void {
    this.getPosters();
  }
  getPosters(): void {
    this.posterService
      .getPosters()
      .subscribe((posters) => (this.posters = posters));
  }
}
