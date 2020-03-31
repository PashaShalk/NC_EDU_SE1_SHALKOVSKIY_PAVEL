import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() {
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  hide = true;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

    submit() {
      if (this.form.valid) {
        this.submitEM.emit(this.form.value);
      }
    }
  ngOnInit(): void {
  }
}

