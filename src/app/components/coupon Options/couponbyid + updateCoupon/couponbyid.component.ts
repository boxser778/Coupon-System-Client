import { Component, OnInit } from "@angular/core";
import { CompanysService } from "src/services/company.service";
import { Router } from "@angular/router";
import { Coupon } from "src/models/coupon";
import { EnumToArrayPipe } from "src/app/shared/enum-to-array.pipe";
import { LoginServiceService } from "src/services/loginServiceService";
import { Company } from "src/models/company";

@Component({
  selector: "app-couponbyid",
  templateUrl: "./couponbyid.component.html",
  styleUrls: ["./couponbyid.component.css"],
  providers: [EnumToArrayPipe]
})
export class CouponbyidComponent {

  constructor(
    private companyService: CompanysService,
    private router: Router,
    private loginService: LoginServiceService
  ) {}

  public companyid: number;
  public couponid: number;
  activatedRoute: any;
  public coupon: Coupon;

  public onSearch() {
    if (this.loginService.isCompany()) {
      this.companyService
        .getOneCoupon(this.loginService.id, this.couponid)
        .subscribe(coupon => {
          this.coupon = coupon;
          console.log(this.coupon);
        }),
        err => {
          alert(err.message);
          this.coupon = undefined;
        };
    }
  }

  public updateCoupon(): void {
    if (this.loginService.isCompany()) {
      this.companyService.updateCoupon(this.loginService.id, this.coupon).subscribe(
        coupon => {
          alert("Coupon has been updated!");

          this.router.navigate(["company/coupons"]);
        },
        err => alert(err.message)
      );
    } else {
      if (this.loginService.isCustomer()) {
        alert("sorry this option not allow to u");
      }
    }
  }
}
