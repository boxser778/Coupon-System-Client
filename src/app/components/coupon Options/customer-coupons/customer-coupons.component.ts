import { CustomersService } from "src/services/customer.service";
import { Component } from "@angular/core";
import { LoginServiceService } from "src/services/loginServiceService";
import { Coupon } from "src/models/coupon";

@Component({
  selector: "app-customer-coupons",
  templateUrl: "./customer-coupons.component.html",
  styleUrls: ["./customer-coupons.component.css"]
})
export class CustomerCouponsComponent {
  public constructor(private customerService: CustomersService) {}

  public coupons: Coupon[];
  public customerid: number;

  public onsearch(): void {
    this.customerService.getAllCoupons(this.customerid).subscribe(coupons => {
      return (this.coupons = coupons);
    });
    console.log(this.coupons);
    err => alert(err.message);
  }
}
