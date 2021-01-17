import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '@app/core/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  createUserForm: FormGroup;

  constructor(private userService: UserService) { }
  onSubmit() {
    console.log("Create User", this.createUserForm.value);
    let userData = this.createUserForm.value;
    this.userService.createUser(userData).subscribe((response) => {
      console.log("User created", response);
    });

  }

  ngOnInit(): void {
    this.createUserForm = new FormGroup({
      "first_name": new FormControl(null),
      "last_name": new FormControl(null),
      "email": new FormControl(null),
      "password": new FormControl(null),
      "savedItems": new FormControl([]),
    })
  }

}
