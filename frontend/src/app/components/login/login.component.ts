import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginMatcher} from '../custom-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() submitEM = new EventEmitter();

  hide;
  rememberMe;
  loginForm: FormGroup;
  loginMatcher = new LoginMatcher();

  ngOnInit(): void {
    this.hide = true;
    this.rememberMe = false;
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required,
                                                      Validators.email,
                                                      Validators.minLength(5),
                                                      Validators.maxLength(254)]),
      password: new FormControl('', [Validators.required,
                                                          Validators.minLength(5),
                                                          Validators.maxLength(30)]),
    });
  }
}

