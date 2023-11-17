import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userData: any;
  userPhotoURL: any;

  constructor(private auth: Auth) { }

  register({email, password}:any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  async login({email, password}:any){
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential)=>{
        this.userData = userCredential.user.email;
        //console.log(this.userData);
        localStorage.setItem('usuario', this.userData);
        localStorage.setItem('hasPhoto', "false");
      })
  }

  async loginGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider())
      .then((userCredential)=>{
        this.userData = userCredential.user.displayName;
        //console.log(this.userData);
        console.log(userCredential.user);

        this.userPhotoURL = userCredential.user.photoURL;

        localStorage.setItem('usuario', this.userData);
        localStorage.setItem('userPhoto', this.userPhotoURL);
        localStorage.setItem('hasPhoto', "true");
      })
  }


  logout(){
    return signOut(this.auth);
  }

}
