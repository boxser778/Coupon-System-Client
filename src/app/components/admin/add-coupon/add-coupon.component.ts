import { Component, OnInit } from "@angular/core";
import { Coupon } from "src/models/coupon";
import { AdminService } from "src/services/admin.service";
import { Router } from "@angular/router";
import { couponType } from "src/models/couponType";
import { EnumToArrayPipe } from "src/app/shared/enum-to-array.pipe";
import { dateStringToNumber } from 'src/app/Utils/dateUtilConvertor';

@Component({
  selector: "app-add-coupon",
  templateUrl: "./add-coupon.component.html",
  styleUrls: ["./add-coupon.component.css"],
  providers: [EnumToArrayPipe]
})
export class AddCouponComponent {
  public coupon = new Coupon();
  public couponType = couponType;

  public startDate: string;
  public endDate: string;

  constructor(private adminService: AdminService, private router: Router) {}

  public addCoupon(): void {
    this.coupon.startDate = dateStringToNumber(this.startDate);
    this.coupon.endDate = dateStringToNumber(this.endDate);

    this.addCoupon,
      this.adminService.addCoupon(this.coupon).subscribe(
        coupon => {
          alert("Coupon has been successfully Added.");

          this.router.navigate(["admin/coupons"]);
        },
        //  err => alert(err.message));
        err => alert("Coupon Title Allready Exist!")
      );
  }
}
