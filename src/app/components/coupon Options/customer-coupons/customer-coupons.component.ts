import { CustomersService } from "src/services/customer.service";
import { Component, OnInit } from "@angular/core";
import { LoginServiceService } from "src/services/loginServiceService";
import { Coupon } from "src/models/coupon";

@Component({
  selector: "app-customer-coupons",
  templateUrl: "./customer-coupons.component.html",
  styleUrls: ["./customer-coupons.component.css"]
})
export class CustomerCouponsComponent implements OnInit{
  public constructor(private customerService: CustomersService) {}

  public coupons: Coupon[];
  public customerid: number;

  ngOnInit(): void {
    this.customerService.getAllCoupons().subscribe(coupons => {
      return (this.coupons = coupons);
    });
    console.log(this.coupons);
    err => alert(err.message);
  }
}
