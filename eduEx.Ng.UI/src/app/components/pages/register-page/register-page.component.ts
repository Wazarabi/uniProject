import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUserRegister } from 'src/app/shared/interfaces/IUserRegister';
import { PasswordsMatchValidator } from 'src/app/shared/validators/password_match_validator';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit{
  registerForm!:FormGroup;
  isSubmitted = false;
  returnUrl = '';

  constructor
  (
    private formBuilder:FormBuilder,
    private userService:UserService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit():void
  {
    this.registerForm = this.formBuilder.group(
    {
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(10)]],
    },
    {
      validators: PasswordsMatchValidator('password','confirmPassword')
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  // to avoid writing loginForm.controls.X we do the following :
  get fc(){ return this.registerForm.controls; }

  submit()
  {
    this.isSubmitted = true;
    if(this.registerForm.invalid) return;

    // more straight forward compared to fc.firstName.value used in login-page-component.ts
    const fv = this.registerForm.value;

    const user:IUserRegister = {
      firstName: fv.firstName,
      lastName: fv.lastName,
      email: fv.email,
      password: fv.password,
      confirmPassword: fv.confirmPassword,
      address: fv.address
    };

    this.userService.register(user).subscribe( _ => {
      this.router.navigateByUrl(this.returnUrl);
    })
  }
}
