import { Component, OnInit } from "@angular/core";
import { Route } from "@angular/compiler/src/core";
import { Router } from "@angular/router";
import { LoginServiceService } from "src/services/loginServiceService";

@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.css"]
})
export class CompanyComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginServiceService) {}

  ngOnInit() {}

  public logout(): void {
    this.loginService.logout();
  }
}
