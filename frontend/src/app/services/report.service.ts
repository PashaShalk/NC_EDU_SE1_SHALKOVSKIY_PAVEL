import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Report} from '../model/report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  sendReport(postId: number, report: string) {
    return this.http.post('/api/reports/post/' + postId, report);
  }

  getAllReports(page: number, count: number) {
    return this.http.get<Report[]>('/api/reports/page/' + page + '/count/' + count);
  }

  getCountAllReports() {
    return this.http.get<number>('/api/reports/count');
  }

  markAsChecked(id: number) {
    return this.http.get('/api/reports/checking/' + id);
  }

  markAsUnchecked(id: number) {
    return this.http.get('/api/reports/unchecking/' + id);
  }
}
