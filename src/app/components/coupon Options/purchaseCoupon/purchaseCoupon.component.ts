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

  constructor(private customerService: CustomersService) {}

  public buyCoupon(): void {
    this.customerService.getOneCoupon(this.companyId,this.chosenCouponId).subscribe(coupon => {
      coupon = coupon;
      console.log(coupon);
      this.customerService.purchaseCoupon(this.customerId,coupon).subscribe(() =>
     (coupon) => alert("Coupon Was Created"));
    }),
    // this.customerService.getOneCoupon(this.companyId,this.chosenCouponId).subscribe(coupon => this.coupon = coupon)
    
  
      err => {
        alert(err.message);
        this.coupon = undefined;
      };
    }}

