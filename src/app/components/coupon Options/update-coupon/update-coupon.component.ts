import { Component, OnInit } from "@angular/core";
import { Coupon } from "src/models/coupon";
import { AdminService } from "src/services/admin.service";
import { ActivatedRoute, Router } from "@angular/router";
import { CompanysService } from "src/services/company.service";

@Component({
  selector: "app-update-coupon",
  templateUrl: "./update-coupon.component.html",
  styleUrls: ["./update-coupon.component.css"]
})
export class UpdateCouponComponent implements OnInit {
  public coupon: Coupon;
  public chosenCouponId: number;
  activatedRoute: any;

  public constructor(private companyService: CompanysService, private activedRoute: ActivatedRoute, private router: Router) {}

  public onSerch() {
    this.companyService.getCouponById(this.chosenCouponId).subscribe(coupon => {
      this.coupon = coupon;
      console.log(this.coupon);
    }),
      err => {
        alert(err.message);
        this.coupon = undefined;
      };
  }
  public ngOnInit() {
    const id = +this.activedRoute.snapshot.params.id;

    this.companyService.getOneCoupon(id).subscribe(
      coupon => {
        this.coupon = coupon;
        if (!coupon) {
          alert("Coupon ID" + id + " Dosent Exist.");
          this.router.navigate(["company/coupons"]);
        }
      },
      err => alert(err.message)
    );
  }

  public updateCoupon(): void {
    this.companyService.updateCoupon(this.coupon).subscribe(
      coupon => {
        alert("Coupon has been updated!");

        this.router.navigate(["company/coupons"]);
      },
      err => alert(err.message)
    );
  }

  public goBack(): void {
    this.router.navigate(["company/coupons"]);
  }
}
