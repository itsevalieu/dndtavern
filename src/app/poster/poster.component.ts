import { Component, OnInit } from '@angular/core';
import { PosterService } from '../poster.service';

export interface Poster {
  id: number;
  title: string;
  subtitle: string;
  short_description: string;
  long_description: string;
  difficulty_level: number;
  type_id: number;
  author: string;
  images: [any];
  link: string;
}

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {

  public posters = [];

  constructor(private _posterService: PosterService) { }

  ngOnInit() {
    this._posterService.getPosters()
      .subscribe(data => this.posters = data);
  }

}
