import { Component, OnInit, Input } from "@angular/core";
import { Coupon } from "src/models/coupon";
import { Observable } from "rxjs";
import { AdminService } from "src/services/admin.service";
import { CompanysService } from "src/services/company.service";
import { LoginServiceService } from "src/services/loginServiceService";

@Component({
  selector: "app-coupons",
  templateUrl: "./coupons.component.html",
  styleUrls: ["./coupons.component.css"]
})
export class CouponsComponent implements OnInit {
  public coupons: Coupon[];
  //   public coupons$: Observable<Coupon[]>;

  public constructor(private companyService: CompanysService) {}

  public ngOnInit(): void {
    this.companyService.getAllCoupons().subscribe(coupons => {
      this.coupons = coupons;
    }),
      err => alert(err.message);
  }
}
