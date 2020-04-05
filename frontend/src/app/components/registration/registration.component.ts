import {Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {ConfirmValidParentMatcher, CustomValidator} from '../custom-validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  hide: boolean;
  registrationForm: FormGroup;
  confirmValidParentMatcher = new ConfirmValidParentMatcher();

  ngOnInit(): void {
    this.hide = true;
    this.registrationForm = new FormGroup({
        email: new FormControl('', [
            Validators.required,
            Validators.email,
            Validators.minLength(5),
            Validators.maxLength(254)]),
        nickname: new FormControl('', [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(30)]),
        firstName: new FormControl('', [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(30)]),
        lastName: new FormControl('', [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(30)]),
        aboutMyself: new FormControl(''),
        passwordGroup: new FormGroup({
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(30)]),
            confirmPassword: new FormControl('', [
                Validators.required
            ])
      }, {validators: CustomValidator.childrenEqual }),
    });
  }
}
