import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/models/customer';
import { AdminService } from 'src/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  public customer: Customer;

  public constructor(private adminsService: AdminService,private activedRoute: ActivatedRoute,private router: Router) { }

  public ngOnInit() {
    const id = +this.activedRoute.snapshot.params.id;

    this.adminsService
    .getOneCustomer(id)
    .subscribe(customer => {this.customer = customer;
    if(!customer){
      alert("Customer ID" + id + " Dosent Exist.");
      this.router.navigate(["/customers"]);
    }
  },
    err => alert(err.message));
  }

    public updateCustomer():void {
      
      this.adminsService
      .updateCustomer(this.customer)
      .subscribe(
        customer => {
          alert("Customer has been updated!" );
  
          this.router.navigate(["/customers"]);
        },
        err => alert(err.message));
      }
}
