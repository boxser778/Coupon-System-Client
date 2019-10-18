import { Component, OnInit } from "@angular/core";
import { CompanysService } from "src/services/company.service";
import { Coupon } from "src/models/coupon";

@Component({
  selector: "app-coupon-by-end-date",
  templateUrl: "./coupon-by-end-date.component.html",
  styleUrls: ["./coupon-by-end-date.component.css"]
})
export class CouponByEndDateComponent implements OnInit {
  public coupons: Coupon[];

  constructor(private companyService: CompanysService) {}

  ngOnInit() {
    this.companyService.getCouponByEndDate().subscribe(coupons => {
      return (this.coupons = coupons);
    }),
      err => alert(err.message);
  }
}
