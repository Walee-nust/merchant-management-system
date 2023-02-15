import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  hide: boolean = true;
  isError: boolean = false;

  onSignin() {
    console.log(this.signinForm.value);
    this.http
      .post('http://localhost:3000/user/signin', this.signinForm.value)
      .subscribe({
        next: (response) => {
          console.log(response)
          this.route.navigate(['/']);
        },
        error: (error) => {
          console.log(error)
          this.isError = true;
        },
      });
  }

  signinForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: Router
  ) { }
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
