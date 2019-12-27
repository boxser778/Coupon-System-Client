import { Component, OnInit } from "@angular/core";
import { CompanysService } from "src/services/company.service";
import { Router } from "@angular/router";
import { Coupon } from "src/models/coupon";
import { Company } from "src/models/company";
import { LoginServiceService } from "src/services/loginServiceService";
import { AdminService } from "src/services/admin.service";
import { User } from "src/models/user";
import { LoginTestService } from 'src/app/services/login-test.service';

@Component({
  selector: "app-get-company-by-id",
  templateUrl: "./get-company-by-id.component.html",
  styleUrls: ["./get-company-by-id.component.css"]
})
export class GetCompanyByIdComponent implements OnInit {
  isAdmin: boolean;
  isCompany: boolean;

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

  ngOnInit(): void {
    if (this.loginService.isCompany()) {
      this.companyService
        .getCompanyById(this.loginService.id)
        .subscribe(company => {
          this.company = company;
          console.log(this.company);
        }),
        err => {
          alert(err.message);
          this.company = undefined;
        };
    }
    this.isAdmin = this.loginService.isAdmin();
  }

  public onSearch() {
    if (this.loginService.isAdmin()) {
      this.adminService
        .getOneCompany(this.chosenCompanyId)
        .subscribe(company => {
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
  }

  public updateCompany(): void {
    if (this.loginService.isAdmin()) {
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
