import { Component, OnInit } from "@angular/core";
import { Coupon } from "src/models/coupon";
<<<<<<< HEAD
import { Observable } from "rxjs";
import { AdminService } from 'src/services/admin.service';
=======
import { CouponsService } from "src/services/coupon.service";
import { Observable } from "rxjs";
>>>>>>> f58ff6de4f7b2766212642dfc25bcefae1d4cc4f

@Component({
  selector: "app-coupons",
  templateUrl: "./coupons.component.html",
  styleUrls: ["./coupons.component.css"]
})
export class CouponsComponent implements OnInit {
  public coupons: Coupon[];
  //   public coupons$: Observable<Coupon[]>;

<<<<<<< HEAD
  public constructor(private adminService: AdminService) {}

  public ngOnInit(): void {
    this.adminService
      .getAllCoupons()
      .subscribe(
        coupons => {
          return this.coupons = coupons}
       
      ),
      err => alert(err.message)
    // this.coupons$ = this.couponsService.getAllCoupons();
  }
}
=======
  public constructor(private couponsService: CouponsService) {}

  public ngOnInit(): void {
    this.couponsService
      .getAllCoupons()
      .subscribe(
        coupons => (this.coupons = coupons),
        err => alert(err.message)
      );
    // this.coupons$ = this.couponsService.getAllCoupons();
  }
}
>>>>>>> f58ff6de4f7b2766212642dfc25bcefae1d4cc4f
