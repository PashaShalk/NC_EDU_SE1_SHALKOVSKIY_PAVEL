import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-info-dialog',
  templateUrl: './edit-info-dialog.component.html',
  styleUrls: ['./edit-info-dialog.component.css']
})
export class EditInfoDialogComponent implements OnInit {

  editInfoForm: FormGroup;
  avatar: File;

  constructor() { }

  ngOnInit(): void {
    this.editInfoForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)]),
      aboutMyself: new FormControl('')
    });
  }
  handleFileInput(file: File) {
    console.log(file);
    this.avatar = file;
  }

}
