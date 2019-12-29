import { Component, OnInit } from "@angular/core";
import { Coupon } from "src/models/coupon";
import { CompanysService } from "src/services/company.service";
import { LoginServiceService } from "src/services/loginServiceService";
import { Company } from "src/models/company";

@Component({
  selector: "app-coupons",
  templateUrl: "./coupons.component.html",
  styleUrls: ["./coupons.component.css"]
})
export class CouponsComponent implements OnInit {
  public constructor(
    private companyService: CompanysService,
    private loginService: LoginServiceService
  ) {}

  public coupons: Coupon[];
  public company: Company;

  ngOnInit(): void {
    if (this.loginService.isCompany()) {
    this.companyService
      .getAllCoupons()
      .subscribe(coupons => {
        return (this.coupons = coupons);
      },
      err=>alert(err.message));

  }
}

}
