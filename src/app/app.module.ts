import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { AdminComponent } from './components/admin/admin.component';

import { LoginComponent } from './components/login/login.component';
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomersComponent } from './components/customers/customers.component';

import { CouponsComponent } from './components/coupons/coupons.component';
import { CompanysComponent } from './components/companys/companys.component';
import { AddCouponComponent } from './components/add-coupon/add-coupon.component';
import { InspectCompanyComponent } from './components/inspect-company/inspect-company.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { DeleteCompanyComponent } from './components/delete-company/delete-company.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { InspectCouponComponent } from './components/inspect-coupon/inspect-coupon.component';
import { InspectCustomerComponent } from './components/inspect-customer/inspect-customer.component';
import { DeleteCouponComponent } from './components/delete-coupon/delete-coupon.component';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { UpdateCouponComponent } from './components/update-coupon/update-coupon.component';


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
    UpdateCouponComponent],
  imports: [BrowserModule,AppRoutingModule,FormsModule,HttpClientModule],
=======
import { AppRoutingModule } from "./app-routing.module";
import { LayoutComponent } from "./components/layout/layout.component";
import { AdminComponent } from "./components/admin/admin.component";
import { CompanyComponent } from "./components/company/company.component";
import { CustomerComponent } from "./components/customer/customer.component";
import { LoginComponent } from "./components/login/login.component";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./components/home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { CompanysComponent } from "./components/companys/companys.component";
import { CouponsComponent } from "./components/coupons/coupons.component";
import { CustomersComponent } from "./components/customers/customers.component";

@NgModule({
  declarations: [
    LayoutComponent,
    AdminComponent,
    CompanyComponent,
    CustomerComponent,
    LoginComponent,
    HomeComponent,
    CompanysComponent,
    CouponsComponent,
    CustomersComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
>>>>>>> f58ff6de4f7b2766212642dfc25bcefae1d4cc4f
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule {}
