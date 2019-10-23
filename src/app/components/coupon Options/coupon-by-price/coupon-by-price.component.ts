import { Component, OnInit } from "@angular/core";
import { CompanysService } from "src/services/company.service";
import { Router } from "@angular/router";
import { Coupon } from "src/models/coupon";

@Component({
  selector: "app-coupon-by-price",
  templateUrl: "./coupon-by-price.component.html",
  styleUrls: ["./coupon-by-price.component.css"]
})
export class CouponByPriceComponent {
  constructor(private companyService: CompanysService, private router: Router) {}

  public chosenPrice: number;
  public coupons: Coupon[];
  activatedRoute: any;
  public coupon: Coupon;

  public onSearch() {
    this.companyService.getCouponByPrice(this.chosenPrice).subscribe(coupons => {
      this.coupons = coupons;
      console.log(this.coupons);
    }),
      err => {
        alert(err.message);
        this.coupons = undefined;
      };
  }
}
