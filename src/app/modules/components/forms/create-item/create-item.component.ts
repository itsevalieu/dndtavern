import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ItemService } from '@core/services/item.service';
import { Item } from '@app/core/models/item';
import { LoggerService } from '@app/core/services/logger.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {
  createItemForm: FormGroup;

  constructor(private itemService: ItemService, private logger: LoggerService) { }
  ngOnInit(): void {
    this.createItemForm = new FormGroup({
      'title': new FormControl(null),
      'subtitle': new FormControl(null),
      'author_id': new FormControl('5fee61486b7a60413053b578'),
      'short-description': new FormControl(null),
      'long-description': new FormControl(null),
      'rating': new FormControl(null),
      'saved': new FormControl(false),
      'favorited': new FormControl(false),
      'type': new FormControl(null),
      'tags': new FormControl(["test"]),
      'category': new FormControl(null),
      // 'images': new FormControl(null),
      'link': new FormControl(null),
    });
  }
  onSubmit() {
    console.log(this.createItemForm.value);
    let itemFormObject = this.createItemForm.value;
    this.itemService.createItems(itemFormObject).subscribe(responseData => {
      console.log(responseData);
    });
    this.createItemForm.reset();
  }
  onCreateItems(itemData: Item): void {
    this.logger.info("PosterComponent: creating new item.");
    this.itemService.createItems(itemData);
  }

}
