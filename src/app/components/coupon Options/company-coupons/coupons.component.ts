import { Component } from "@angular/core";
import { Coupon } from "src/models/coupon";
import { CompanysService } from "src/services/company.service";
import { LoginServiceService } from "src/services/loginServiceService";
import { Company } from "src/models/company";

@Component({
  selector: "app-coupons",
  templateUrl: "./coupons.component.html",
  styleUrls: ["./coupons.component.css"]
})
export class CouponsComponent {


  public constructor(
    private companyService: CompanysService,
    private loginService: LoginServiceService
  ) {}

  public coupons: Coupon[];
  public companyid:number;

 public onsearch():void {
     this.companyService.getAllCoupons(this.companyid).subscribe(coupons => {
      return this.coupons = coupons;
   })
   console.log(this.coupons);
    err => alert(err.message);
  }
  
}


