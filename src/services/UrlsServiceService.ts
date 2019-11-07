import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UrlsServiceService {
  constructor() {}

  private adminMenuUrl = "http://localhost:8080/coupon-system/admin/";
  private companyMenuUrl = "http://localhost:8080/coupon-system/company/";
  private customerMenuUrl = "http://localhost:8080/coupon-system/customer/";
  private loginUrl = "http://localhost:8080/coupon-system/Login/login/";

  public getAdminUrl() {
    return this.adminMenuUrl;
  }

  public getCompanyUrl() {
    return this.companyMenuUrl;
  }

  public getCustomerUrl() {
    return this.customerMenuUrl;
  }

  public getLoginUrl() {
    return this.loginUrl;
  }
}
