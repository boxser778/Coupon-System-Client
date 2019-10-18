import { Component, OnInit } from "@angular/core";
import { Customer } from "src/models/customer";
import { AdminService } from "src/services/admin.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-delete-customer",
  templateUrl: "./delete-customer.component.html",
  styleUrls: ["./delete-customer.component.css"]
})
export class DeleteCustomerComponent implements OnInit {
  public customer: Customer;

  constructor(private adminService: AdminService, private activeatedRoute: ActivatedRoute, private router: Router) {}

  public ngOnInit(): void {
    const id = +this.activeatedRoute.snapshot.params.id;

    this.adminService.getOneCustomer(id).subscribe(
      customer => {
        this.customer = customer;
        if (!customer) {
          alert("Customer Id " + id + " Dosent Exist.");
          this.router.navigate(["/customers"]);
        }
      },
      err => alert(err.message)
    );
  }

  public deleteCustomer(): void {
    this.adminService.deleteCustomer(this.customer.id).subscribe(
      () => {
        alert("Customer has been successfully deleted");
        this.router.navigate(["/customers"]);
      },

      err => alert(err.message)
    );
  }

  public cancelDelete(): void {
    this.router.navigate(["/customers"]);
  }
}
