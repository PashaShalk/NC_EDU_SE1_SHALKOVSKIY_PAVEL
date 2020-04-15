import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddPostDialogComponent} from '../add-post-dialog/add-post-dialog.component';
import {EditInfoDialogComponent} from '../edit-info-dialog/edit-info-dialog.component';
import {FormGroup} from '@angular/forms';
import {ConfirmValidParentMatcher} from '../custom-validator';

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
  openEditInfoDialog(): void {
    this.dialog.open(EditInfoDialogComponent, {autoFocus: false});
  }
  openAddPostDialog(): void {
    this.dialog.open(AddPostDialogComponent, {autoFocus: false});
  }

}
