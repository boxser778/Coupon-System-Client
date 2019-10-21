import { Component, OnInit } from "@angular/core";
import { Customer } from "src/models/customer";
import { CustomersService } from "src/services/customer.service";
import { LoginServiceService } from 'src/services/loginServiceService';

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit {
  public customers: Customer[];

  public constructor(private loginService: LoginServiceService) {}

  public ngOnInit(): void {}
  public logout(): void {
    this.loginService.logout();}
    
}
