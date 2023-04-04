import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
username = ""
password = ""
errormsg=""

constructor(private auth :AuthService, private router:Router){

}

ngOnInit(): void {  
}
login()
{
if (this.username.trim().length === 0){
this.errormsg = "Username is Required";
} else if (this.password.trim().length === 0){
  this.errormsg = "password is Required";
}else{
  this.errormsg = "";
  let res = this.auth.login(this.username,this.password);
  if(res === 200) {
    this.router.navigate(['home'])
  }
  if(res === 403){
    this.errormsg = "Invalid Username or Password"
  }
}
}
}
