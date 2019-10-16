import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/models/coupon';
import { AdminService } from 'src/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-coupon',
  templateUrl: './delete-coupon.component.html',
  styleUrls: ['./delete-coupon.component.css']
})
export class DeleteCouponComponent implements OnInit {

  public coupon: Coupon;

  constructor(private adminService: AdminService, private activeatedRoute: ActivatedRoute, private router: Router) { }

  public ngOnInit(): void {

    const id = +this.activeatedRoute.snapshot.params.id;

    this.adminService
    .getOneCoupon(id)
    .subscribe(
      coupon => {
      this.coupon = coupon;
      if(!coupon) {
        alert("Coupon Id " + id + " Dosent Exist.");
        this.router.navigate(["/coupons"]);
      }
    },
    err => alert(err.message));

  }

  public deleteCoupon(): void {  
    this.adminService
    .deleteCoupon(this.coupon.id)
    .subscribe(
      () => {
        alert("Coupon has been successfully deleted");
        this.router.navigate(["/coupons"]);
      },
      err => alert(err.message));
    
    }

    public cancelDelete(): void {
        this.router.navigate(["/coupons"]);
    }
  }



  