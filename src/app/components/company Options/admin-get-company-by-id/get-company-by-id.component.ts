import { Component } from "@angular/core";
import { CompanysService } from "src/services/company.service";
import { Router } from "@angular/router";
import { LoginServiceService } from "src/services/loginServiceService";
import { AdminService } from "src/services/admin.service";
import { Company } from "src/models/company";
import { Coupon } from "src/models/coupon";

@Component({
  selector: "app-get-company-by-id",
  templateUrl: "./get-company-by-id.component.html",
  styleUrls: ["./get-company-by-id.component.css"]
})
export class GetCompanyByIdComponent {
  constructor(
    private companyService: CompanysService,
    private router: Router,
    private loginService: LoginServiceService,
    private adminService: AdminService
  ) {}

  public chosenCompanyId: number;
  activatedRoute: any;
  public company: Company;
  public coupons: Coupon[];

  public onSearch() {
    if (this.loginService.isAdmin) {
      this.adminService.getOneCompany(this.chosenCompanyId).subscribe(company => {
        (this.company = company), this.coupons;

        console.log(this.company);
      }),
        err => {
          alert(err.message);
          this.company = undefined;
        };
    }
  }

  public updateCompany(): void {
    if (this.loginService.isAdmin) {
      this.adminService.updateCompany(this.company).subscribe(
        company => {
          alert("Company has been updated!");

          this.router.navigate(["admin/companys"]);
        },
        err => alert(err.message)
      );
    }
  }
}
