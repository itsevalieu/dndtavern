import { Component, OnInit } from '@angular/core';
import { PosterService } from '../poster.service';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.scss']
})
export class BulletinComponent implements OnInit {
  public posters = [];

  constructor(private _posterService: PosterService) { }

  ngOnInit() {
    this._posterService.getPosters()
      .subscribe(data => this.posters = data);
  }

}
