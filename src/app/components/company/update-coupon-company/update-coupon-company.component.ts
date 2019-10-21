import { Component, OnInit } from '@angular/core';
import { CompanysService } from 'src/services/company.service';
import { Coupon } from 'src/models/coupon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  public coupon: Coupon;

  public constructor(private companyService: CompanysService,private activedRoute: ActivatedRoute,private router: Router) { }

  public ngOnInit() {
    const id = +this.activedRoute.snapshot.params.id;

    this.companyService
    .getOneCoupon(id)
    .subscribe(coupon => {this.coupon = coupon;
    if(!coupon){
      alert("Coupon ID" + id + " Dosent Exist.");
      this.router.navigate(["/company"]);
    }
  },
    err => alert(err.message));
  }

    public updateCoupon():void {
      
      this.companyService
      .updateCoupon(this.coupon)
      .subscribe(
        coupon => {
          alert("Coupon has been updated!" );
  
          this.router.navigate(["/company"]);
        },
        err => alert(err.message));
      }

      public goBack(): void {
        this.router.navigate(["/company"]);
    }
}
