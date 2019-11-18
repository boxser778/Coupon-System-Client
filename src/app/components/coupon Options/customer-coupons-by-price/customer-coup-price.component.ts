import { Component } from '@angular/core';
import { EnumToArrayPipe } from 'src/app/shared/enum-to-array.pipe';
import { CompanysService } from 'src/services/company.service';
import { Router } from '@angular/router';
import { Coupon } from 'src/models/coupon';
import { CustomersService } from 'src/services/customer.service';

@Component({
    selector: "app-customer-coup-price",
    templateUrl: "./customer-coup-price.component.html",
    styleUrls: ["./customer-coup-price.component.css"],
    providers: [EnumToArrayPipe]
  })
  export class CustomerCouponPriceComponent {
    constructor(
      private customerService: CustomersService,
      private router: Router
    ) {}

    public customerid: number;
    public chosenprice: number;
    public coupons: Coupon[];
  
    public onSearch() {
      this.customerService
        .getCouponByPrice(this.customerid, this.chosenprice)
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