import { Component } from "@angular/core";
import { Coupon } from "src/models/coupon";
import { Router } from "@angular/router";
import { couponType } from "src/models/couponType";
import { EnumToArrayPipe } from "src/app/shared/enum-to-array.pipe";
import { dateStringToNumber } from "src/app/Utils/dateUtilConvertor";
import { CompanysService } from "src/services/company.service";
import { LoginServiceService } from "src/services/loginServiceService";
import { Company } from "src/models/company";

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
  public chosenCompanyId: number;

  constructor(
    private companyService: CompanysService  ) {}

  public addCoupon(): void {
    
    this.companyService.getCompanyById(this.chosenCompanyId).subscribe(company => {
      (this.company = company), this.coupon;

        console.log(this.company);
        
    // this.coupon.startDate = dateStringToNumber(this.startDate);
    this.coupon.endDate = dateStringToNumber(this.endDate);

        this.companyService
          .addCoupon(this.chosenCompanyId, this.coupon)
          .subscribe(
            () => {
              // alert("Coupon has been successfully Added.");
              // this.router.navigate(["company/coupons"]);
            },
            () => alert("Coupon Was Created")
            //  err => alert(err.message)
            // err => alert("Coupon Title Allready Exist!")
          );
      }),
      err => {
        alert(err.message);
        this.company = undefined;
      };
  }
}
