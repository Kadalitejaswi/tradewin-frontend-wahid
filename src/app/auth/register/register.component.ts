import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userdata={
      lastName:'',
    firstName:'',
    email:'',
    phonenumber:'',
    conpassword:'',
    password:''
    }
  constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit() {
  }
  signUp(data){
    console.log(data);
    this._auth.signUp(data)
    .subscribe(
     res=> {
       console.log(res);
       localStorage.setItem('token',res.token);
       this._router.navigate(['home']);

      }
    )
  }
}
