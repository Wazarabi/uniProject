import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATORS_MESSAGES:any = {
  required: 'Should not be empty',
  email : 'Email is not valid',
  minlength: 'Field is too short',
  noMatch: 'Password and Confirm do not match'
}


@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.scss']
})
export class InputValidationComponent implements OnInit,OnChanges  {
  @Input()
  control!:AbstractControl; // same type of control we used in the login-page at first (fc) this.loginForm.controls.[email || password];
  @Input()
  showErrorsWhen:boolean = true; // same as using *ngIf, 4 readability purposes we avoid too many ngIfs

  errorMessages :string[] = [];

  // Since we have another input property (showErrorWhen)
  // that needes to be reactive to external changes we add :
  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }

  ngOnInit(): void {
    // validation status change
    this.control.statusChanges.subscribe(() => {
      this.checkValidation();
    });
    this.control.valueChanges.subscribe(() => {
      this.checkValidation();
    });
  }


  checkValidation(){
    const errors = this.control.errors;
    if(!errors){
      this.errorMessages = [];
      return;
    }
    const errorKeys = Object.keys(errors); // ['required','email']
    this.errorMessages = errorKeys.map(key => VALIDATORS_MESSAGES[key]);
  }


}
