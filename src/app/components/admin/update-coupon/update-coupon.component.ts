import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/models/coupon';
import { AdminService } from 'src/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  public coupon: Coupon;

  public constructor(private adminsService: AdminService,private activedRoute: ActivatedRoute,private router: Router) { }

  public ngOnInit() {
    const id = +this.activedRoute.snapshot.params.id;

    this.adminsService
    .getOneCoupon(id)
    .subscribe(coupon => {this.coupon = coupon;
    if(!coupon){
      alert("Coupon ID" + id + " Dosent Exist.");
      this.router.navigate(["admin/coupons"]);
    }
  },
    err => alert(err.message));
  }

    public updateCoupon():void {
      
      this.adminsService
      .updateCoupon(this.coupon)
      .subscribe(
        coupon => {
          alert("Coupon has been updated!" );
  
          this.router.navigate(["admin/coupons"]);
        },
        err => alert(err.message));
      }

      public goBack(): void {
        this.router.navigate(["admin/coupons"]);
    }
}
