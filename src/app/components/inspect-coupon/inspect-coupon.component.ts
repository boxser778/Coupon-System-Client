import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Coupon } from 'src/models/coupon';

@Component({
  selector: 'app-inspect-coupon',
  templateUrl: './inspect-coupon.component.html',
  styleUrls: ['./inspect-coupon.component.css']
})
export class InspectCouponComponent implements OnInit {

  public coupon: Coupon;

  constructor(private adminService: AdminService,private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
   
    const id = +this.activatedRoute.snapshot.params.id;

    this.adminService
    .getOneCoupon(id)
    .subscribe(
      coupon => {
        this.coupon = coupon;
        if(!coupon){
          alert("Coupon Id " + id + " dosen't Exist.");
          this.router.navigate(["/coupons"]);
        }
      },
      err => alert(err.message));
  }

}