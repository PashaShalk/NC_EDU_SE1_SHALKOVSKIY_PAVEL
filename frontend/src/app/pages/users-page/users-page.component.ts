import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  surname: string;
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, surname: '', name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, surname: '', name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, surname: '', name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, surname: '', name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, surname: '', name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, surname: '', name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, surname: '', name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, surname: '', name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, surname: '', name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, surname: '',  name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  displayedColumns: string[] = ['position', 'surname', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }
  ngOnInit(): void {
  }
}
