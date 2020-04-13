import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddPostDialogComponent} from '../add-post-dialog/add-post-dialog.component';

@Component({
  selector: 'app-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.css']
})
export class AccountHeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openAddPostDialog(): void {
    this.dialog.open(AddPostDialogComponent, {autoFocus: false});
  }

}
