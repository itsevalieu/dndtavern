import { Component, OnInit } from '@angular/core';
import { Item } from '@app/core/models/item';
import { ItemService } from '@app/core/services/item.service';
import { LoggerService } from '@app/core/services/logger.service';
@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.scss'],
})
export class BulletinComponent implements OnInit {
  public loadedPosters: Item[] = [];
  posters: Item[] = [];
  isFetching: boolean = false;

  constructor(
    private itemService: ItemService, 
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.isFetching = true;
    this.itemService.fetchItems().subscribe((posters) => {
      this.isFetching = false;
      this.loadedPosters = posters;
      this.posters = posters;
    });
  }

  filterPostersByType(type: string){
    this.logger.info("Bulletin: filter by type. ", type);
    if(type === 'all') {
      this.posters = this.loadedPosters;
      return;
    } else {
      this.posters = this.loadedPosters.filter((poster)=> {
        if (poster.type === type) {
          return true;
        }
      });
    }
  }
  onFetchItems(): void {
    this.logger.info("Bulletin: getting posters.");
    this.isFetching = true;
    this.itemService.fetchItems().subscribe((posters) => {
      this.isFetching = false;
      this.loadedPosters = posters;
    });
  }
}
