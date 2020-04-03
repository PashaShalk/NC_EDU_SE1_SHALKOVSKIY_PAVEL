import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  hide;
  registrationForm: FormGroup;

  ngOnInit(): void {
      this.hide = true;
      this.registrationForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
      });
  }
}

