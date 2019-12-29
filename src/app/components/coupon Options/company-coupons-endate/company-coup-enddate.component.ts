import { Component } from "@angular/core";
import { EnumToArrayPipe } from "src/app/shared/enum-to-array.pipe";
import { Coupon } from "src/models/coupon";
import { CompanysService } from "src/services/company.service";
import { Router } from "@angular/router";
import { LoginServiceService } from "src/services/loginServiceService";
import { reverseDate, dateStringToNumber } from 'src/app/Utils/dateUtilConvertor';

@Component({
  selector: "app-company-coup-enddate",
  templateUrl: "./company-coup-enddate.component.html",
  styleUrls: ["./company-coup-enddate.component.css"],
  providers: [EnumToArrayPipe]
})
export class CompanyCouponEndDateComponent {
  endDate: string;

  constructor(
    private companyService: CompanysService,
    private router: Router,
    public loginService: LoginServiceService
  ) {}

  public companyid: number;
  public coupons: Coupon[];
  public chosenEndDate: string;
  public coupon: Coupon;

  public onSearch() {
    // this.updateCouponsByEndDate(reverseDate(this.chosenEndDate));
    this.updateCouponsByEndDate(dateStringToNumber(this.chosenEndDate));
  }

  private updateCouponsByEndDate(endDate: number) {
    this.companyService
      .getCouponByEndDate(this.loginService.id, endDate)
      .subscribe(coupons => {
        this.coupons = coupons;
        this.coupon.endDate = this.endDate;
      }),
      err => {
        alert(err.message);
        this.coupons = undefined;
    };}
    
    // public setEndDate(date: string) {
    //   this.coupon.endDate = reverseDate(date);
    // }
}
