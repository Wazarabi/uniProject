import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{
  loginForm!:FormGroup;
  isSubmitted = false; // don't show validation errors by default

  constructor(private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
    email : ['', [Validators.required, Validators.email]],
    password : ['', Validators.required]
    });
  }

  // to avoid writing loginForm.controls.X we do the following :
  get fc(){
    return this.loginForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid) return;

    alert(`email: ${this.fc.email.value},
      password: ${this.fc.password.value}`);
  }


}
