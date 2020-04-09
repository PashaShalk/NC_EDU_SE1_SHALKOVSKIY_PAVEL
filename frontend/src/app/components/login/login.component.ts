import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginMatcher} from '../custom-validator';
import {LocalStorageService} from '../../services/local-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private localStorageService: LocalStorageService) {}

  @Output() submitEM = new EventEmitter();

  hide;
  rememberMe;
  loginForm: FormGroup;
  loginMatcher = new LoginMatcher();

  logIn(event){
    console.log(event);
    this.localStorageService.setItem('credentials', JSON.stringify(event));
    this.router.navigate(['/']);
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

