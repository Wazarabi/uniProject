import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {
  @Input()
  control!:AbstractControl;
  @Input()
  showErrorsWhen:boolean = true;
  @Input()
  label!:string;
  @Input()
  type: 'text' | 'password' | 'email' = 'text';
  // COOL TS feature string as a Type to avoid syntaxe errors


  // Casting AbstractControl to FormControl
  get formControl(){
    return this.control as FormControl;
  }










}
