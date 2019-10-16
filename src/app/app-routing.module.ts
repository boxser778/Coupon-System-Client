import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AdminGuardService } from 'src/services/admin-guard.service';
import { CompanysComponent } from './components/companys/companys.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { CustomersComponent } from './components/customers/customers.component';
<<<<<<< HEAD
import { DeleteCompanyComponent } from './components/delete-company/delete-company.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { InspectCompanyComponent } from './components/inspect-company/inspect-company.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddCouponComponent } from './components/add-coupon/add-coupon.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { InspectCouponComponent } from './components/inspect-coupon/inspect-coupon.component';
import { InspectCustomerComponent } from './components/inspect-customer/inspect-customer.component';
import { DeleteCouponComponent } from './components/delete-coupon/delete-coupon.component';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerGuardService } from 'src/services/cusotmer-guard.service';
import { CompanyGuardService } from 'src/services/company-guard.service';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { UpdateCouponComponent } from './components/update-coupon/update-coupon.component';


const routes: Routes = [
{ path: "home", component:HomeComponent },
{ path: "admin",  component: AdminComponent },
{ path: "company", canActivate: [CompanyGuardService], component:CompanyComponent },
{ path: "customer", canActivate: [CustomerGuardService], component:CustomerComponent },
{ path: "login", component:LoginComponent },
{ path: "", redirectTo: "/home" , pathMatch: "full" },
{ path: "companys" , component:CompanysComponent },
{ path: "coupons" , component:CouponsComponent},
{ path: "customers", component:CustomersComponent},
{ path: "companys/delete/:id", component: DeleteCompanyComponent},
{ path: "newCompany",component:AddCompanyComponent},
{ path: "companys/:id", component:InspectCompanyComponent},
{ path: "newCustomer", component:AddCustomerComponent},
{ path: "newCoupon", component:AddCouponComponent},
{ path: "customers/delete/:id", component:DeleteCustomerComponent},
{ path: "coupons/:id", component:InspectCouponComponent},
{ path: "customers/:id", component:InspectCustomerComponent},
{ path: "coupons/delete/:id", component:DeleteCouponComponent},
{ path: "companys/update/:id" , component:UpdateCompanyComponent},
{ path: "customers/update/:id" , component:UpdateCustomerComponent},
{ path: "coupons/update/:id" , component:UpdateCouponComponent}
=======


const routes: Routes = [
{ path:"home", component:HomeComponent },
{ path:"admin", canActivate:[AdminGuardService] ,component:AdminComponent },
{ path:"company", canActivate:[CompanyGuardService] ,component:CompanyComponent },
{ path:"customer", canActivate:[CusotmerGuardService], component:CustomerComponent },
{ path:"login", component:LoginComponent },
{ path: "", redirectTo: "/home" , pathMatch: "full" },
{ path: "companys", component:CompanysComponent},
{ path: "coupons" , component:CouponsComponent},
{ path: "customers", component:CustomersComponent}
>>>>>>> f58ff6de4f7b2766212642dfc25bcefae1d4cc4f
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
