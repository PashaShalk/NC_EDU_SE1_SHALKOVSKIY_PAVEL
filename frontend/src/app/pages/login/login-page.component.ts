import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {LSUser} from '../../model/ls-user.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService,
              private userService: UserService,
              private  router: Router) {
  }

  rememberMe: boolean;
  loginError: boolean;
  bannedUser: boolean;

  ngOnInit(): void {
  }

  setRememberMe(event) {
    this.rememberMe = event;
  }

  login(event) {
    this.userService.getToken(event).subscribe((value) => {
      console.log(value.token);
      if (value) {
        this.localStorageService.setToken(value.token);

        this.userService.getUserByEmail(event.email).subscribe((user) => {
          console.log(user);
          if (!user) {
            this.loginError = true;
            this.bannedUser = false;
          } else if (user.status === 'BANNED') {
            this.loginError = false;
            this.bannedUser = true;
          } else {
            this.localStorageService.setAuthorizedUser(new LSUser(user.id, user.role));
            this.userService.setLogin();
            this.router.navigate(['/feed']);
          }
        });
        // this.userService.authorizeUser(event).subscribe((user) => {
        //   console.log(user);
        //   if (!user) {
        //     this.loginError = true;
        //     this.bannedUser = false;
        //   } else if (user.status === 'BANNED') {
        //     this.loginError = false;
        //     this.bannedUser = true;
        //   } else {
        //     this.localStorageService.setAuthorizedUser(new LSUser(user.id, user.role));
        //     this.userService.setLogin();
        //     this.router.navigate(['/feed']);
        //   }
        // });
      }
    });
  }
}
