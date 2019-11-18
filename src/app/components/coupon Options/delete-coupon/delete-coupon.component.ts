import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/models/coupon';
import { AdminService } from 'src/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanysService } from 'src/services/company.service';
import { Company } from 'src/models/company';

@Component({
  selector: 'app-delete-coupon',
  templateUrl: './delete-coupon.component.html',
  styleUrls: ['./delete-coupon.component.css']
})
export class DeleteCouponComponent  {

  public coupon: Coupon;
  public chosenCouponId: number;
  

  constructor(private companyService:CompanysService, private activeatedRoute: ActivatedRoute, private router: Router) { }
  
  public onSearch() {
    
    this.companyService.getOneCoupon(this.chosenCouponId).subscribe(coupon => {
      this.coupon = coupon;
      console.log(this.coupon);
    }),
      err => {
        alert(err.message);
        this.coupon = undefined;
      };
  }

  public deleteCoupon(): void {
    this.companyService.deleteCoupon(this.chosenCouponId).subscribe(
      () => {
        alert("Company has been successfully deleted");
        this.router.navigate(["company/coupons"]);
      },
      err => alert(err.message)
    );
  }

  public cancelDelete(): void {
    this.router.navigate(["company/coupons"]);
  }
}
  