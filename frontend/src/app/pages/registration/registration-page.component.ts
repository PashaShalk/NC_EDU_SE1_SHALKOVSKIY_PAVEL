import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {AuthorizedUser} from '../../model/authorized-user.model';
import {User} from '../../model/user.model';
import {RegisteredUser} from '../../model/registered-user.model';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  constructor(private userService: UserService,
              private  router: Router) {
  }

  registrationError: boolean;

  ngOnInit(): void {
  }

  register(event) {
    this.userService.registerUser(new RegisteredUser(
        event.controls.email.value,
        event.controls.nickname.value,
        event.controls.firstName.value,
        event.controls.lastName.value,
        event.controls.aboutMyself.value,
        event.controls.passwordGroup.value.password,
        event.controls.passwordGroup.value.confirmPassword)).subscribe((user) => {
      if (!user) {
        this.registrationError = true;
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
