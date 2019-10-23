import { Component, OnInit } from "@angular/core";
import { CompanysService } from "src/services/company.service";
import { Coupon } from "src/models/coupon";
import { dateStringToNumber } from "src/app/Utils/dateUtilConvertor";
import { Route, Router } from '@angular/router';

@Component({
  selector: "app-coupon-by-end-date",
  templateUrl: "./coupon-by-end-date.component.html",
  styleUrls: ["./coupon-by-end-date.component.css"]
})
export class CouponByEndDateComponent {
 
  public chosenEndDate: string;
  public coupons: Coupon[];
  activatedRoute: any;

  constructor(private companyService: CompanysService,private router:Router) {}

  public onSearch() {
    this.updateCouponsByEndDate(dateStringToNumber(this.chosenEndDate));
  }

  private updateCouponsByEndDate(endDate: number) {
    this.companyService.getCouponByEndDate(endDate).subscribe(coupons => {
      this.coupons = coupons;
      console.log(this.coupons);
    }),
      err => {
        alert(err.message);
        this.coupons = undefined;
      };
  }
  
  
}
