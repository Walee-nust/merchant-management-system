import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{

 hide: boolean = true;

onSignin() {
    console.log(this.signinForm.value);
}

  signinForm!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.signinForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

}

function onSignin(this: any) {

   if (!this.signinForm.valid) {
      return;
    }
}
