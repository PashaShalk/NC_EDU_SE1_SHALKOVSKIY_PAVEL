import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {User} from '../../model/user.model';
import {UserService} from '../../services/user.service';
import {UserInfo} from '../../model/user-info.model';

@Component({
  selector: 'app-edit-info-dialog',
  templateUrl: './edit-info-dialog.component.html',
  styleUrls: ['./edit-info-dialog.component.css']
})
export class EditInfoDialogComponent implements OnInit {

  editInfoForm: FormGroup;
  avatar: File;

  constructor(public dialogRef: MatDialogRef<EditInfoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User,
              private userService: UserService) {
  }

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
    if (file) {
      this.avatar = file;
    }
  }

  changeInfo() {
    if (this.avatar) {
      this.userService.uploadAvatar(this.data.id, this.avatar).subscribe((value) => {
        this.dialogRef.close('success');
      }, () => {
        this.dialogRef.close('error');
      });
    }

    if (this.data.firstName !== this.editInfoForm.value.firstName
      || this.data.lastName !== this.editInfoForm.value.lastName
      || this.data.profileDescription !== this.editInfoForm.value.aboutMyself) {

      this.userService.updateInfo(new UserInfo(this.editInfoForm.value.firstName,
        this.editInfoForm.value.lastName,
        this.editInfoForm.value.aboutMyself), this.data.id).subscribe((user) => {
        this.data = user;
        this.dialogRef.close('success');
      }, () => {
        this.dialogRef.close('error');
      });
    }
  }
}
