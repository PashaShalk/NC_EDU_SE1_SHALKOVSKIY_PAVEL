import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {SubscriptionsData} from '../../model/subscriptions-data.model';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router) {
  }

  user: User;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.userService.getUserByNickname(params.nickname).subscribe((user) => {
        this.user = user;
      });
    });
  }
}
