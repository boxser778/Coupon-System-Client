import { Component, OnInit } from "@angular/core";
import { CompanysService } from 'src/services/company.service';
import { Router } from '@angular/router';
import { Coupon } from 'src/models/coupon';
import { EnumToArrayPipe } from 'src/app/shared/enum-to-array.pipe';
import { couponType } from 'src/models/couponType';

@Component({
  selector: "app-coupon-by-type",
  templateUrl: "./coupon-by-type.component.html",
  styleUrls: ["./coupon-by-type.component.css"],
  providers: [EnumToArrayPipe]
})
export class CouponByTypeComponent {
  
  public coupon = new Coupon();
  public couponType = couponType;
  public chosenType: couponType;
  public coupons: Coupon[];
  activatedRoute: any;

  constructor(private companyService: CompanysService, private router: Router) {}

  public onSearch() {
    this.companyService.getCouponByType(this.chosenType).subscribe(coupons => {
      this.coupons = coupons;
      console.log(this.coupons);
    }),
      err => {
        alert(err.message);
        this.coupons = undefined;
      };
  }
}
