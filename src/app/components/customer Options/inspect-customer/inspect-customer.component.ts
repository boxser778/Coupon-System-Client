import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/models/customer';
import { AdminService } from 'src/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inspect-customer',
  templateUrl: './inspect-customer.component.html',
  styleUrls: ['./inspect-customer.component.css']
})
export class InspectCustomerComponent implements OnInit {

  public customer: Customer;

  constructor(private adminService: AdminService,private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
   
    const id = +this.activatedRoute.snapshot.params.id;

    this.adminService
    .getOneCustomer(id)
    .subscribe(
      customer => {
        this.customer = customer;
        if(!customer){
          alert("Customer Id " + id + " dosen't Exist.");
          this.router.navigate(["/customers"]);
        }
      },
      err => alert(err.message));
  }

  public goBack(): void {
    this.router.navigate(["admin/customers"]);
}

}
