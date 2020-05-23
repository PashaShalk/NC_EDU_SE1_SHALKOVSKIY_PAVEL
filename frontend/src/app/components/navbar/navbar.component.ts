import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import {User} from '../../model/user.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public localStorageService: LocalStorageService,
              private userService: UserService) {
  }

  user: User;

  ngOnInit(): void {
    if (!this.localStorageService.isAuthorized()) {
      this.userService.login.subscribe(() => {
        this.userService.getUserByID(this.localStorageService.getUserID()).subscribe((user) => {
          this.user = user;
        });
      });
    } else if (this.localStorageService.isUser()) {
      this.userService.getUserByID(this.localStorageService.getUserID()).subscribe((user) => {
        this.user = user;
      });
    }
    // this.user = {
    //   id: 3,
    //   email: 'test@mail.ru',
    //   nickname: 'Pasha_Shalk',
    //   firstName: 'Pavel',
    //   lastName: 'Shalkovskiy',
    //   profileDescription: 'Its my official page!',
    //   role: 'USER', status: 'ACTIVE'
    // };
  }

  logout() {
    this.localStorageService.clear();
  }

  // redirectToAccount() {
  //   this.userService.setUser(this.user);
  // }
}
