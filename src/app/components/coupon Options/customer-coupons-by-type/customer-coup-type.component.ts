import { Component } from '@angular/core';
import { EnumToArrayPipe } from 'src/app/shared/enum-to-array.pipe';
import { Coupon } from 'src/models/coupon';
import { CustomersService } from 'src/services/customer.service';
import { Router } from '@angular/router';
import { couponType } from 'src/models/couponType';



@Component({
    selector: "app-customer-coup-type",
    templateUrl: "./customer-coup-type.component.html",
    // styleUrls: ["./customer-coup-type.component.css"],
    providers: [EnumToArrayPipe]
  })
  export class CustomerCouponTypeComponent {
    
   public coupon = new Coupon();
    constructor(private customerService: CustomersService, private router: Router) {}

    public couponType = couponType;
    public chosenType: couponType;
    public customerid:number;
    public coupons: Coupon[];

    public onSearch() {
        this.customerService.getCouponByType(this.customerid,this.chosenType).subscribe(coupons => {
          this.coupons = coupons;
          console.log(this.coupons);
        }),
          err => {
            alert(err.message);
            this.coupons = undefined;
          };
      }
    
  }