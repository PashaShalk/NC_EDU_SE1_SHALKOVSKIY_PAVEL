import { Component, OnInit } from '@angular/core';
import {ReportDialogComponent} from '../report-dialog/report-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {PostComponent} from '../post/post.component';

@Component({
  selector: 'app-images-grid-list',
  templateUrl: './images-grid-list.component.html',
  styleUrls: ['./images-grid-list.component.css']
})
export class ImagesGridListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
}