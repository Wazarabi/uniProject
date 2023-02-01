import { AbstractControl } from '@angular/forms';

export const PasswordsMatchValidator =
  (passwordControlName:string, confirmPasswordControlName:string) => {

    // sets the error object of the controls once given a form
    const validator = (form: AbstractControl) => {

      // find a control inside a form
      const passwordControl = form.get(passwordControlName);
      const confirmPasswordControl = form.get(confirmPasswordControlName);

      // this shouldn't be possible normaly but to bypass the compiler error we add it
      if (!passwordControl || !confirmPasswordControl) return;

      // define new error in case of not matching
      if (passwordControl.value !== confirmPasswordControl.value){
        confirmPasswordControl.setErrors({ noMatch: true});
      }
      else{
        const errors = confirmPasswordControl.errors;
        console.log(errors);
        if(!errors) return;
        delete errors.noMatch; // this is how you delete a property from an object
        confirmPasswordControl.setErrors(errors);
      }
    }

    // we are returning a fct here
    return validator;
  }
