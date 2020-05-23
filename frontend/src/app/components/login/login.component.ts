import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginMatcher} from '../custom-validator';
import {LocalStorageService} from '../../services/local-storage.service';
import {LoginData} from '../../model/login-data.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) {
  }

  @Input()
  loginError: boolean;

  @Input()
  bannedUser: boolean;

  @Output()
  login: EventEmitter<LoginData> = new EventEmitter();

  @Output()
  remember: EventEmitter<boolean> = new EventEmitter();

  hide: boolean;
  rememberMe: boolean;
  loginForm: FormGroup;
  loginMatcher = new LoginMatcher();

  _login() {
    this.remember.next(this.rememberMe);
    this.login.next(this.loginForm.value);
  }

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

