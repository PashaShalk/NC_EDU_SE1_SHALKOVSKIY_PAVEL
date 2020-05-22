import {Component, OnInit} from '@angular/core';
import {PostComponent} from '../../components/post/post.component';
import {MatDialog} from '@angular/material/dialog';
import {Report} from '../../model/report.model';
import {ReportService} from '../../services/report.service';
import {Post} from '../../model/post.model';
import {AccountPostComponent} from '../../components/account-post/account-post.component';
import {User} from '../../model/user.model';
import {UserService} from '../../services/user.service';
import {PostService} from '../../services/post.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.css']
})
export class ReportsPageComponent implements OnInit {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  reports: Report[];
  length: number;
  pageSize = 5;
  displayedColumns: string[] = ['post', /*'user',*/ 'date', 'reason', 'actions'];

  constructor(public dialog: MatDialog,
              private reportService: ReportService,
              private userService: UserService,
              private postService: PostService) {
  }

  ngOnInit(): void {
    this.reportService.getAllReports(0, this.pageSize).subscribe((reports) => {
      this.reports = reports;
    });
    this.reportService.getCountAllReports().subscribe((count) => {
      this.length = count;
    });
  }

  update(event) {
    this.reportService.getAllReports(event.pageIndex, this.pageSize).subscribe((reports) => {
      this.reports = reports;
    });
  }

  openDialog(post: Post): void {
    this.dialog.open(AccountPostComponent, {data: post, autoFocus: false, maxHeight: '90vh'});
  }

  // changeUserStatus(author: User, page: number) {
  //   if (author.status === 'ACTIVE') {
  //     this.userService.blockUser(author.id).subscribe(() => {
  //       this.reportService.getAllReports(page, this.pageSize).subscribe((reports) => {
  //         this.reports = reports;
  //       });
  //     });
  //   } else {
  //     this.userService.unblockUser(author.id).subscribe(() => {
  //       this.reportService.getAllReports(page, this.pageSize).subscribe((reports) => {
  //         this.reports = reports;
  //       });
  //     });
  //   }
  // }

  changeReportStatus(report: Report, page: number) {
    if (report.status === 'UNCHECKED') {
      this.reportService.markAsChecked(report.id).subscribe(() => {
        this.reportService.getAllReports(page, this.pageSize).subscribe((reports) => {
          this.reports = reports;
        });
      });
    } else {
      this.reportService.markAsUnchecked(report.id).subscribe(() => {
        this.reportService.getAllReports(page, this.pageSize).subscribe((reports) => {
          this.reports = reports;
        });
      });
    }
  }

  deletePost(postId: number, authorId: number, page: number) {
    this.postService.deletePost(postId, authorId).subscribe(() => {
      this.reportService.getAllReports(page, this.pageSize).subscribe((reports) => {
        this.reports = reports;
      });
    });
  }
}
