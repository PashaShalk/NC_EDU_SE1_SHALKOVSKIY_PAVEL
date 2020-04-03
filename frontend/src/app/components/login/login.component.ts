import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';

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

