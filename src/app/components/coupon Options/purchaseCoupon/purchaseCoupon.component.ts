import { Component } from "@angular/core";
import { CustomersService } from "src/services/customer.service";
import { Router } from "@angular/router";
import { LoginServiceService } from "src/services/loginServiceService";
import { Coupon } from "src/models/coupon";
import { Company } from "src/models/company";
import { Customer } from "src/models/customer";
import { AdminService } from "src/services/admin.service";
import { CompanysService } from "src/services/company.service";

@Component({
  selector: "app-purchaseCoupon",
  templateUrl: "./purchaseCoupon.component.html",
  styleUrls: ["./purchaseCoupon.component.css"]
})
export class PurchaseCouponComponent {
  public customerId: number;
  public chosenCouponId: number;
  public coupon: Coupon;

  constructor(private customerService: CustomersService) {}

  public buyCoupon(): void {
    this.customerService.purchaseCoupon(this.customerId,this.coupon).subscribe(coupon => {
      this.coupon = coupon;
      console.log(this.coupon);
    }),
      err => {
        alert(err.message);
        this.coupon = undefined;
      };
  }
}
