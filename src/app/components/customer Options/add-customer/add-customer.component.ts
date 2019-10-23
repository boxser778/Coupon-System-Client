import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/models/customer';
import { AdminService } from 'src/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent  {

  public customer = new Customer();
  constructor(private adminService: AdminService, private router: Router) { }

  public addCustomer():void {
    this.addCustomer,this.adminService
    .addCustomer(this.customer)
    .subscribe(
    customer => {
      alert("Customer has been successfully Added.");
      
      this.router.navigate(["admin/customers"]);
    },
    // err => alert(err.message));
    err => alert("Customer Name Allready Exist!"));
  }

}
