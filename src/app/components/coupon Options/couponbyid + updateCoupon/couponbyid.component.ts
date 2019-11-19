import { Component, OnInit } from '@angular/core';
import { CompanysService } from 'src/services/company.service';
import { Router } from '@angular/router';
import { Coupon } from 'src/models/coupon';
import { EnumToArrayPipe } from 'src/app/shared/enum-to-array.pipe';
import { LoginServiceService } from 'src/services/loginServiceService';

@Component({
  selector: 'app-couponbyid',
  templateUrl: './couponbyid.component.html',
  styleUrls: ['./couponbyid.component.css'],
  providers: [EnumToArrayPipe]
  
})
export class CouponbyidComponent {

  constructor(private companyService: CompanysService, private router: Router,private loginService: LoginServiceService) {}

  public companyid:number;
  public couponid: number;
  activatedRoute: any;
  public coupon: Coupon;

  public onSearch() {
    this.companyService.getOneCoupon(this.companyid,this.couponid).subscribe(coupon => {
      this.coupon = coupon;
      console.log(this.coupon);
    }),
      err => {
        alert(err.message);
        this.coupon = undefined;
      };
  }

  
  public updateCoupon(): void {
      this.companyService.updateCoupon(this.couponid,this.coupon).subscribe(
        coupon => {
          alert("Coupon has been updated!");
  
          this.router.navigate(["company/coupons"]);
        },
        err => alert(err.message)
      );
    
    }
    
}
