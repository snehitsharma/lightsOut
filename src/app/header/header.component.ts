import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
constructor(private route:Router, private auth:AuthService){ }
ngOnInit(): void{

}
GoToHome(){
this.route.navigate(['home'])
}
logout(){
this.auth.logout();
}
}
