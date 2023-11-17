import { PlatformLocation } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formReg: FormGroup;
  errorStatus: any;

  //googleIcon: string = 'assets/google-icon.png';

  constructor(
    private userService: UserService,
    private router: Router,
    //private platformLocation: PlatformLocation
  ){
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit(){
    //console.log(this.formReg.value);
    this.userService.login(this.formReg.value)
      .then(res => {
        //console.log(res);
        this.router.navigate(['/lista'])
      })
      .catch(error => {
        console.log(error)
        switch (error.code){
          case "auth/invalid-login-credentials":
            this.errorStatus = "Email o contraseña incorrectos";
            break;

          case "auth/invalid-email":
            this.errorStatus = "El email es inválido";
            break;

          default:
            this.errorStatus = error.code;
            break;
        }
      })
  }

  async loginWithGoogle(){
    await this.userService.loginGoogle();
    this.router.navigate(['/lista']);
  }
}
