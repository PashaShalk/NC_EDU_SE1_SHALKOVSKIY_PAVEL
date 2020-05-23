import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddPostDialogComponent} from '../add-post-dialog/add-post-dialog.component';
import {EditInfoDialogComponent} from '../edit-info-dialog/edit-info-dialog.component';
import {User} from '../../model/user.model';
import {LocalStorageService} from '../../services/local-storage.service';
import {LSUser} from '../../model/ls-user.model';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SubscriptionsData} from '../../model/subscriptions-data.model';
import {SubscriptionsService} from '../../services/subscriptions.service';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.css']
})
export class AccountHeaderComponent implements OnInit {

  constructor(public dialog: MatDialog,
              private localStorageService: LocalStorageService,
              private userService: UserService,
              private subscriptionsService: SubscriptionsService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private postService: PostService) {
  }

  user: User;
  avatar: string;
  subscriptionsData: SubscriptionsData;
  authorizedUser: LSUser;

  ngOnInit(): void {
    this.authorizedUser = this.localStorageService.getAuthorizedUser();

    this.activatedRoute.params.subscribe((params) => {
      this.userService.getUserByNickname(params.nickname).subscribe((user) => {
        this.user = user;
        this.avatar = 'http://localhost:8081/api/users/avatar/' + this.user.id;
        this.subscriptionsService.getSubscriptionsData(this.user.id, this.authorizedUser.id).subscribe((data) => {
          this.subscriptionsData = data;
        });
      });
    });
  }

  openEditInfoDialog(): void {
    this.dialog.open(EditInfoDialogComponent, {data: this.user, autoFocus: false})
      .afterClosed().subscribe((result: string) => {
      if (result === 'success') {
        this.userService.getUserByNickname(this.user.nickname).subscribe((user) => {
          this.user = user;
          this.avatar = 'http://localhost:8081/api/users/avatar/' + this.user.id;
        });
      }
    });
  }

  openAddPostDialog(): void {
    this.dialog.open(AddPostDialogComponent, {data: this.user, autoFocus: false})
      .afterClosed().subscribe((result: string) => {
      if (result === 'success') {
        this.postService.setUpdate();
      }
    });
  }

  subscribe() {
    this.subscriptionsService.subscribe(this.user.id, this.authorizedUser.id).subscribe((data) => {
      if (data) {
        this.subscriptionsData = data;
      }
    });
  }

  unsubscribe() {
    this.subscriptionsService.unsubscribe(this.user.id, this.authorizedUser.id).subscribe((data) => {
      if (data) {
        this.subscriptionsData = data;
      }
    });
  }
}
