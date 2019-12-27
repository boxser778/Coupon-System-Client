import { Component } from "@angular/core";
import { Coupon } from "src/models/coupon";
import { Router } from "@angular/router";
import { couponType } from "src/models/couponType";
import { EnumToArrayPipe } from "src/app/shared/enum-to-array.pipe";
import { dateStringToNumber } from "src/app/Utils/dateUtilConvertor";
import { CompanysService } from "src/services/company.service";
import { LoginServiceService } from "src/services/loginServiceService";
import { Company } from "src/models/company";
import { User } from "src/models/user";

@Component({
  selector: "app-add-coupon",
  templateUrl: "./add-coupon.component.html",
  styleUrls: ["./add-coupon.component.css"],
  providers: [EnumToArrayPipe]
})
export class AddCouponComponent {
  public coupon = new Coupon();
  public couponType = couponType;

  public startDate: string;
  public endDate: string;
  public company: Company;

  constructor(
    private companyService: CompanysService,
    private loginService: LoginServiceService,
    private router:Router
  ) {}

  public addCoupon(): void {
      this.coupon.endDate = dateStringToNumber(this.endDate);
        this.companyService
        .addCoupon(this.coupon,this.loginService.id)
        .subscribe(
          () => {
            alert("Coupon has been successfully Added.");
                  this.router.navigate(["company/coupons"]);
          },
        
          () => alert("Coupon Was Created")

        
          );
    // }),
      // err => {
      //   alert(err.message);
      //   this.company = undefined;
      // };
  }
}


