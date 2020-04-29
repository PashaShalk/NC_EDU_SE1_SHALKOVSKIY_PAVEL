import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ReportDialogComponent} from '../report-dialog/report-dialog.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  likeStatus: boolean;
  dislikeStatus: boolean;
  commentTouched: boolean;
  commentForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.likeStatus = true;
    this.dislikeStatus = true;
    this.commentTouched = false;
    this.commentForm = new FormGroup({
      comment: new FormControl('')
    });
  }
  changeLikeStatus() {
    if (this.dislikeStatus) {
      this.likeStatus = !this.likeStatus;
    } else {
      this.dislikeStatus = !this.dislikeStatus;
      this.likeStatus = !this.likeStatus;
    }
  }
  changeDislikeStatus() {
    if (this.likeStatus) {
      this.dislikeStatus = !this.dislikeStatus;
    } else {
      this.likeStatus = !this.likeStatus;
      this.dislikeStatus = !this.dislikeStatus;
    }
  }
}
