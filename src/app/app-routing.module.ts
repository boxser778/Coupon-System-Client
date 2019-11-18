import { NgModule } from "@angular/core";
import { Routes, RouterModule, ChildrenOutletContexts } from "@angular/router";
import { AdminComponent } from "./components/Accounts/admin/admin.component";
import { HomeComponent } from "./components/home/home.component";
import { AdminGuardService } from "src/services/admin-guard.service";
import { CompanysComponent } from "./components/company Options/companys/companys.component";
import { CouponsComponent } from "./components/coupon Options/company-coupons/coupons.component";
import { CustomersComponent } from "./components/customer Options/customers/customers.component";
import { DeleteCompanyComponent } from "./components/company Options/delete-company/delete-company.component";
import { AddCompanyComponent } from "./components/company Options/add-company/add-company.component";
import { InspectCompanyComponent } from "./components/company Options/inspect-company/inspect-company.component";
import { AddCustomerComponent } from "./components/customer Options/add-customer/add-customer.component";
import { AddCouponComponent } from "./components/coupon Options/add-coupon/add-coupon.component";
import { DeleteCustomerComponent } from "./components/customer Options/delete-customer/delete-customer.component";
import { InspectCouponComponent } from "./components/coupon Options/inspect-coupon/inspect-coupon.component";
import { InspectCustomerComponent } from "./components/customer Options/inspect-customer/inspect-customer.component";
import { DeleteCouponComponent } from "./components/coupon Options/delete-coupon/delete-coupon.component";
import { UpdateCompanyComponent } from "./components/company Options/update-company/update-company.component";
import { UpdateCustomerComponent } from "./components/customer Options/update-customer/update-customer.component";
import { UpdateCouponComponent } from "./components/coupon Options/update-coupon/update-coupon.component";
import { CompanyGuardService } from "src/services/company-guard.service";
import { CompanyComponent } from "./components/Accounts/company/company.component";
import { GetCompanyByIdComponent } from "./components/company Options/get-company-by-id/get-company-by-id.component";
import { CustomerGuardService } from "src/services/cusotmer-guard.service";
import { CustomerComponent } from "./components/Accounts/customer/customer.component";
import { LoginComponent } from "./components/login/login.component";
import { CouponbyidComponent } from "./components/coupon Options/couponbyid + updateCoupon/couponbyid.component";
import { GetCustomerByIdComponent } from './components/customer Options/get-customer-by-id/customerbyid.component';
import { PurchaseCouponComponent } from './components/coupon Options/purchaseCoupon/purchaseCoupon.component';
import { CustomerCouponsComponent } from './components/coupon Options/customer-coupons/customer-coupons.component';
import { CompanyCouponTypeComponent } from './components/coupon Options/company-coupons-by-type/company-coup-type.component';
import { CompanyCouponPriceComponent } from './components/coupon Options/company-coupons-by-price/company-coup-price.component';
import { CompanyCouponEndDateComponent } from './components/coupon Options/company-coupons-endate/company-coup-enddate.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "admin",
    canActivate: [AdminGuardService],
    component: AdminComponent,
    children: [
      { path: "companys", component: CompanysComponent },
      { path: "customers", component: CustomersComponent },
      { path: "newCompany", component: AddCompanyComponent },
      { path: "newCustomer", component: AddCustomerComponent },
      { path: "companybyid", component: GetCompanyByIdComponent },
      { path: "customerbyid", component: GetCustomerByIdComponent },
      { path: "deleteCompany", component: DeleteCompanyComponent },
      { path: "deleteCustomer", component: DeleteCustomerComponent }
    ]
  },
  {
    path: "company",
    canActivate: [CompanyGuardService],
    component: CompanyComponent,
    children: [
      { path: "companycoupons", component: CouponsComponent },
      { path: "couponbydate", component: CompanyCouponEndDateComponent },
      { path: "couponbyprice", component: CompanyCouponPriceComponent },
      { path: "couponbytype", component: CompanyCouponTypeComponent },
      { path: "companybyid", component: GetCompanyByIdComponent },
      { path: "couponbyid", component: CouponbyidComponent },
      { path: "createCoupon", component: AddCouponComponent },
      { path: "updateCoupon", component: UpdateCouponComponent },
      { path: "deleteCoupon", component: DeleteCouponComponent }
    ]
  },
  {
    path: "customer",
    canActivate: [CustomerGuardService],
    component: CustomerComponent,
    children: [
      { path: "customercoupons", component: CustomerCouponsComponent },
      // { path: "couponbyprice", component: CouponByPriceComponent },
      // { path: "couponbytype", component: CompanyCouponTypeComponent },
      { path: "purchaseCoupon", component: PurchaseCouponComponent },
    ]
  },

  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
