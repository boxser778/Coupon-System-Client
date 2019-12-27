import { Component, OnInit } from "@angular/core";
import { Company } from "src/models/company";
import { ActivatedRoute, Router } from "@angular/router";
import { AdminService } from "src/services/admin.service";
import { tokenKey } from '@angular/core/src/view';

@Component({
  selector: "app-delete-company",
  templateUrl: "./delete-company.component.html"
})
export class DeleteCompanyComponent {
  public company: Company;
  public chosenCompanyId: number;

  constructor(private adminService: AdminService, private activeatedRoute: ActivatedRoute, private router: Router) {}

  public onSearch() {
    this.adminService.getOneCompany(this.chosenCompanyId).subscribe(company => {
      this.company = company;
      console.log(this.company);
      if (company === null) {
        alert("there is not such an company id")
      }
    }),
      err => {
        alert(err.message);
        this.company = undefined;
      };
  }

  public deleteCompany(): void {
    this.adminService.deleteCompany(this.company.id).subscribe(
      () => {
        alert("Company has been successfully deleted");
        this.router.navigate(["admin/customers"]);
      },
      err => alert(err.message)
    );
  }

  public cancelDelete(): void {
    this.router.navigate(["admin/customers"]);
  }
}
