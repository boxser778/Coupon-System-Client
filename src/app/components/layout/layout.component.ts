import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  public constructor(private loginService: LoginService, private router:Router) { }

  public logoutDemo(): void {
   
    this.loginService.logout();
    this.router.navigate (["/home"]);

  }

}
