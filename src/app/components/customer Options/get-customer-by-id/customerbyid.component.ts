import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/services/loginServiceService';
import { AdminService } from 'src/services/admin.service';
import { Customer } from 'src/models/customer';
import { Coupon } from 'src/models/coupon';

@Component({
    selector: "app-customerbyid",
    templateUrl: "./customerbyid.component.html",
    styleUrls: ["./customerbyid.component.css"]
  })
  export class GetCustomerByIdComponent {
    constructor(
        private router: Router,
        private loginService: LoginServiceService,
        private adminService: AdminService
      ) {}
    
      public chosenCustomerId: number;
      activatedRoute: any;
      public customer: Customer;
    
      public onSearch() {
        if (this.loginService.isAdmin()) {
          this.adminService.getOneCustomer(this.chosenCustomerId).subscribe(customer => {
            this.customer = customer;
            console.log(this.customer);
          }),
            err => {
              alert(err.message);
              this.customer = undefined;
            };   
  
  }
      }
  public updateCustomer(): void {
    if (this.loginService.isAdmin()) {
      this.adminService.updateCustomer(this.customer).subscribe(
       customer => {
          alert("Customer has been updated!");
  
          this.router.navigate(["admin/customers"]);
        },
        err => alert(err.message)
      );
    }
}
  }
