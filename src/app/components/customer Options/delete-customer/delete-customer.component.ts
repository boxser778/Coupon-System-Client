import { Component, OnInit } from "@angular/core";
import { Customer } from "src/models/customer";
import { AdminService } from "src/services/admin.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-delete-customer",
  templateUrl: "./delete-customer.component.html",
  styleUrls: ["./delete-customer.component.css"]
})
export class DeleteCustomerComponent {
  public customer: Customer;
  public chosenCustomerId: number;
  constructor(private adminService: AdminService, private activeatedRoute: ActivatedRoute, private router: Router) {}

  public onSearch() {
    this.adminService.getOneCustomer(this.chosenCustomerId).subscribe(customer => {
      this.customer = customer;
      console.log(this.customer);
      if (customer === null) {
        alert("there is not such an customer id")
      }
    }),
      err => {
        alert(err.message);
        this.customer = undefined;
      };
  }

  public deleteCustomer(): void {
    this.adminService.deleteCustomer(this.customer.id).subscribe(
      () => {
        alert("Customer has been successfully deleted");
        this.router.navigate(["/admin/companys"]);
      },

      err => alert(err.message)
    );
  }

  public cancelDelete(): void {
    this.router.navigate(["admin/customers"]);
  }
}
