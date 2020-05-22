import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  pageSize = 5;
  length: number;
  users: User[];
  displayedColumns: string[] = ['photo', 'nickname', 'name', 'surname', 'status'];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAllUsers(0, this.pageSize).subscribe((users) => {
      this.users = users;
    });
    this.userService.getCountAllUsers().subscribe((count) => {
      this.length = count;
    });
  }

  update(event) {
    this.userService.getAllUsers(event.pageIndex, this.pageSize).subscribe((users) => {
      this.users = users;
    });
  }

  changeUserStatus(user: User, page: number) {
    console.log(typeof user.status);

    if (user.status === 'ACTIVE') {
      this.userService.blockUser(user.id).subscribe(() => {
        this.userService.getAllUsers(page, this.pageSize).subscribe((users) => {
          this.users = users;
        });
      });
    } else {
      this.userService.unblockUser(user.id).subscribe(() => {
        this.userService.getAllUsers(page, this.pageSize).subscribe((users) => {
          this.users = users;
        });
      });
    }
    // this.userService.getAllUsers(0, this.pageSize).subscribe((users) => {
    //   this.users = users;
    // });
  }
}

