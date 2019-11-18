import { Component } from '@angular/core';
import { EnumToArrayPipe } from 'src/app/shared/enum-to-array.pipe';
import { Coupon } from 'src/models/coupon';
import { CompanysService } from 'src/services/company.service';
import { Router } from '@angular/router';
import { dateStringToNumber } from 'src/app/Utils/dateUtilConvertor';

@Component({
    selector: "app-company-coup-enddate",
    templateUrl: "./company-coup-enddate.component.html",
    styleUrls: ["./company-coup-enddate.component.css"],
    providers: [EnumToArrayPipe]
  })
  export class CompanyCouponEndDateComponent {

    
    constructor(private companyService: CompanysService, private router: Router) {}
    
    public companyid:number;
    public coupons: Coupon[];
    public chosenEndDate:string;


    public onSearch() {
            this.updateCouponsByEndDate(dateStringToNumber(this.chosenEndDate));
          }
        
          private updateCouponsByEndDate(endDate: number) {
            this.companyService.getCouponByEndDate(this.companyid,endDate).subscribe(coupons => {
              this.coupons = coupons;
              console.log(this.coupons);
            }),
              err => {
                alert(err.message);
                this.coupons = undefined;
              };
          }
  }