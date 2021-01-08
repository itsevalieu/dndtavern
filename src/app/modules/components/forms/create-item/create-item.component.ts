import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {
  createItemForm: FormGroup;

  constructor() { }
  onSubmit() {
    console.log(this.createItemForm);
  }
  ngOnInit(): void {
    this.createItemForm = new FormGroup({
      'title': new FormControl(null),
      'subtitle': new FormControl(null),
    });
  }

}
