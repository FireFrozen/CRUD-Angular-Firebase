import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formReg: FormGroup;
  errorStatus: any;

  constructor(
    private userService: UserService,
    private router: Router
  ){
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit(){
    //console.log(this.formReg.value);
    this.userService.register(this.formReg.value)
      .then(res => {
        console.log(res);
        this.router.navigate(['/'])
        this.userService.logout();
      })
      .catch(error => {
        console.log(error);

        switch (error.code){
          case "auth/email-already-in-use":
            this.errorStatus = "El usuario ya está en uso";
            break;

          case "auth/invalid-email":
            this.errorStatus = "El email es inválido";
            break;

          case "auth/weak-password":
            this.errorStatus = "La contraseña debe tener más de 5 caracteres";
            break;  

          default:
            this.errorStatus = error.code;
            break;
        }

        // if (error.code == "auth/email-already-in-use"){
        //   this.errorStatus = "El usuario ya está en uso";
        // } else{
        //   this.errorStatus = error.code;
        // }

      })
  }


}
