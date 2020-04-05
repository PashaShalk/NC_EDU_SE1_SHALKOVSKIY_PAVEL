import { Component, OnInit } from '@angular/core';
import {ReportDialogComponent} from '../report-dialog/report-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-post-menu',
  templateUrl: './post-menu.component.html',
  styleUrls: ['./post-menu.component.css']
})
export class PostMenuComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openReportDialog(): void {
    this.dialog.open(ReportDialogComponent);
  }
}
