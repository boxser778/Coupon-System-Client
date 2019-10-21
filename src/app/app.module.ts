import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { AdminComponent } from './components/admin/admin.component';

import { LoginComponent } from './components/login/login.component';
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomersComponent } from './components/admin/customers/customers.component';

import { CouponsComponent } from './components/admin/coupons/coupons.component';
import { CompanysComponent } from './components/admin/companys/companys.component';
import { AddCouponComponent } from './components/admin/add-coupon/add-coupon.component';
import { InspectCompanyComponent } from './components/admin/inspect-company/inspect-company.component';
import { AddCompanyComponent } from './components/admin/add-company/add-company.component';
import { DeleteCompanyComponent } from './components/admin/delete-company/delete-company.component';
import { AddCustomerComponent } from './components/admin/add-customer/add-customer.component';
import { DeleteCustomerComponent } from './components/admin/delete-customer/delete-customer.component';
import { InspectCouponComponent } from './components/admin/inspect-coupon/inspect-coupon.component';
import { InspectCustomerComponent } from './components/admin/inspect-customer/inspect-customer.component';
import { DeleteCouponComponent } from './components/admin/delete-coupon/delete-coupon.component';
import { UpdateCompanyComponent } from './components/admin/update-company/update-company.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { UpdateCustomerComponent } from './components/admin/update-customer/update-customer.component';
import { UpdateCouponComponent } from './components/admin/update-coupon/update-coupon.component';
import { CouponByEndDateComponent } from './components/company/coupon-by-end-date/coupon-by-end-date.component';
import { CouponByPriceComponent } from './components/company/coupon-by-price/coupon-by-price.component';
import { CouponByTypeComponent } from './components/company/coupon-by-type/coupon-by-type.component';
import { GetCompanyByIdComponent } from './components/company/get-company-by-id/get-company-by-id.component';


@NgModule({
  declarations: [LayoutComponent, LoginComponent, HomeComponent, AdminComponent ,CouponsComponent,CompanysComponent,
    CustomersComponent,
    AddCouponComponent,
    InspectCompanyComponent,
    AddCompanyComponent,
    DeleteCompanyComponent,
    AddCustomerComponent,
    DeleteCustomerComponent,
    InspectCouponComponent,
    InspectCustomerComponent,
    DeleteCouponComponent,
    AdminComponent,
    UpdateCompanyComponent,
    CompanyComponent,
    CustomerComponent,
    UpdateCustomerComponent,
    UpdateCouponComponent,
    CouponByEndDateComponent,
    CouponByPriceComponent,
    CouponByTypeComponent,
    GetCompanyByIdComponent],
  imports: [BrowserModule,AppRoutingModule,FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule {}
