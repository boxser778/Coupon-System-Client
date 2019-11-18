import { NgModule } from "@angular/core";
import { LayoutComponent } from "./components/layout/layout.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { AdminComponent } from "./components/Accounts/admin/admin.component";
import { CouponsComponent } from "./components/coupon Options/company-coupons/coupons.component";
import { CompanysComponent } from "./components/company Options/companys/companys.component";
import { CustomersComponent } from "./components/customer Options/customers/customers.component";
import { AddCouponComponent } from "./components/coupon Options/add-coupon/add-coupon.component";
import { InspectCompanyComponent } from "./components/company Options/inspect-company/inspect-company.component";
import { AddCompanyComponent } from "./components/company Options/add-company/add-company.component";
import { DeleteCompanyComponent } from "./components/company Options/delete-company/delete-company.component";
import { AddCustomerComponent } from "./components/customer Options/add-customer/add-customer.component";
import { DeleteCustomerComponent } from "./components/customer Options/delete-customer/delete-customer.component";
import { InspectCustomerComponent } from "./components/customer Options/inspect-customer/inspect-customer.component";
import { DeleteCouponComponent } from "./components/coupon Options/delete-coupon/delete-coupon.component";
import { UpdateCompanyComponent } from "./components/company Options/update-company/update-company.component";
import { CompanyComponent } from "./components/Accounts/company/company.component";
import { CustomerComponent } from "./components/Accounts/customer/customer.component";
import { UpdateCustomerComponent } from "./components/customer Options/update-customer/update-customer.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { GetCompanyByIdComponent } from "./components/company Options/get-company-by-id/get-company-by-id.component";
import { CouponbyidComponent } from "./components/coupon Options/couponbyid + updateCoupon/couponbyid.component";
import { GetCustomerByIdComponent } from "./components/customer Options/get-customer-by-id/customerbyid.component";
import { PurchaseCouponComponent } from "./components/coupon Options/purchaseCoupon/purchaseCoupon.component";
import { CustomerCouponsComponent } from "./components/coupon Options/customer-coupons/customer-coupons.component";
import { CompanyCouponTypeComponent } from "./components/coupon Options/company-coupons-by-type/company-coup-type.component";
import { CompanyCouponPriceComponent } from "./components/coupon Options/company-coupons-by-price/company-coup-price.component";
import { CompanyCouponEndDateComponent } from "./components/coupon Options/company-coupons-endate/company-coup-enddate.component";
import { CustomerCouponPriceComponent } from './components/coupon Options/customer-coupons-by-price/customer-coup-price.component';
import { CustomerCouponTypeComponent } from './components/coupon Options/customer-coupons-by-type/customer-coup-type.component';

@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    CouponsComponent,
    CompanysComponent,
    CustomersComponent,
    AddCouponComponent,
    InspectCompanyComponent,
    AddCompanyComponent,
    DeleteCompanyComponent,
    AddCustomerComponent,
    DeleteCustomerComponent,
    InspectCustomerComponent,
    DeleteCouponComponent,
    AdminComponent,
    UpdateCompanyComponent,
    CompanyComponent,
    CustomerComponent,
    UpdateCustomerComponent,
    GetCompanyByIdComponent,
    CouponbyidComponent,
    GetCustomerByIdComponent,
    PurchaseCouponComponent,
    CustomerCouponsComponent,
    CompanyCouponTypeComponent,
    CompanyCouponPriceComponent,
    CompanyCouponEndDateComponent,
    CustomerCouponPriceComponent,
    CustomerCouponTypeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule {}
