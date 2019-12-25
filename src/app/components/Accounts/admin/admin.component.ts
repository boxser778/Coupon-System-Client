import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginServiceService } from "src/services/loginServiceService";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginServiceService) {}

  ngOnInit() {}
  
  public logout(): void {
    this.loginService.logout();
  }
}
