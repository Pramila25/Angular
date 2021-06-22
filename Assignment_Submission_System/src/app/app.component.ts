import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGPOC';
  appName ="My App Assignment";

  constructor(private authservice:AuthService,private router:Router){}

  login(){
    if(!this.authservice.loggedIn){
      this.authservice.logIn();
    }else{
      this.authservice.logOut();
      this.router.navigate(['/home']);
    }
  }
}
