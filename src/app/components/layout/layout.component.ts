import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/services/loginServiceService';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  public constructor(private loginService: LoginServiceService, private router:Router) { }

  public logout(): void {
    this.loginService.logout();
    this.router.navigate (["/home"]);

  }

}
