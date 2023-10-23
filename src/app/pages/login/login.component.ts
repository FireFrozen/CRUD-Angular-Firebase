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
    this.userService.login(this.formReg.value)
      .then(res => {
        //console.log(res);
        this.router.navigate(['/lista'])
      })
      .catch(error => console.log(error))
  }

  async loginWithGoogle(){
    await this.userService.loginGoogle();
    this.router.navigate(['/lista']);
  }
}
