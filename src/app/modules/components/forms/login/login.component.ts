import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  onSubmit(form: NgForm) {
    console.log("Submit login form", form.value);

  }
  ngOnInit(): void {
  }

}
