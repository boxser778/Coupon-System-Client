import { Component } from "@angular/core";
import { CustomersService } from 'src/services/customer.service';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/services/loginServiceService';
import { Coupon } from 'src/models/coupon';
import { Company } from 'src/models/company';
import { Customer } from 'src/models/customer';
import { AdminService } from 'src/services/admin.service';
import { CompanysService } from 'src/services/company.service';

@Component({
  selector: "app-purchaseCoupon",
  templateUrl: "./purchaseCoupon.component.html",
  styleUrls: ["./purchaseCoupon.component.css"]
})

export class PurchaseCouponComponent {

    private coupon:Coupon
    private customer:Customer 
    private chosenCouponId:number
    

  constructor(
    private customerService: CustomersService,
    private router: Router,
    private loginService: LoginServiceService,
    private adminService: AdminService,
    private companyService: CompanysService
  ) {}


 

    public buyCoupon(): void {
        const customerId = this.loginService.isCustomer
    //  this.customerService.purchaseCoupon(customerId,this.coupon)
    }
  
}
