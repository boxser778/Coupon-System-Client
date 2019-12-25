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
  public coupon:Coupon;
  public companyId:number;

  constructor(private customerService: CustomersService,private loginService:LoginServiceService) {}

  public buyCoupon(): void {
  // if (this.loginService.isCustomer()) {
    this.customerService.getOneCoupon(this.loginService.id,this.chosenCouponId).subscribe(coupon => {
      this.coupon = coupon;
      console.log(coupon);
      this.customerService.purchaseCoupon(this.loginService.id,this.companyId,coupon).subscribe(() =>
      () => alert("Coupon was created!"))
    }),
    err => {
      alert(err.message);
      this.coupon = undefined;
    };

  
  }
  // }
}

