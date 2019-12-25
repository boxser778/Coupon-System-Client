import { Component } from "@angular/core";

import { EnumToArrayPipe } from "src/app/shared/enum-to-array.pipe";

import { Coupon } from "src/models/coupon";

import { CompanysService } from "src/services/company.service";

import { Router } from "@angular/router";
import { LoginServiceService } from 'src/services/loginServiceService';

@Component({
  selector: "app-company-coup-price",
  templateUrl: "./company-coup-price.component.html",
  styleUrls: ["./company-coup-price.component.css"],
  providers: [EnumToArrayPipe]
})
export class CompanyCouponPriceComponent {
  constructor(
    private companyService: CompanysService,
    private router: Router,
    public loginService:LoginServiceService
  ) {}


  public chosenprice: number;
  public coupons: Coupon[];

  public onSearch() {
    this.companyService
      .getCouponByPrice(this.loginService.id, this.chosenprice)
      .subscribe(coupons => {
        this.coupons = coupons;
        console.log(this.coupons);
      }),
      err => {
        alert(err.message);
        this.coupons = undefined;
      };
  }
}
