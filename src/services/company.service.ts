import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Company } from "src/models/company";
import { Coupon } from "src/models/coupon";
import { couponType } from 'src/models/couponType';

@Injectable({
  providedIn: "root"
})
export class CompanysService {
  public constructor(private httpClient: HttpClient) {}

  // public getAllCompanys(): Observable<Company[]> {
  //     return this.httpClient.get<Company[]>("http://localhost:8080/admin/company");
  // }

  // public getOneCompany(id:number): Observable<Company>{
  //     return this.httpClient.get<Company>("http://localhost:8080/admin/company/" + id);
  // }

  public addCoupon(coupon: Coupon): Observable<Coupon> {
    return this.httpClient.post<Coupon>("http://localhost:8080/company/coupon", coupon, {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    });
  }

  // public deleteCompany(id: number): Observable<undefined>{
  //     return this.httpClient.delete<undefined>("http://localhost:8080/admin/company" + id);
  // }

  public getCouponByEndDate(endDate): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(`http://localhost:8080/company/couponByDate/${endDate}`);
  }

  public getOneCoupon(id: number): Observable<Coupon> {
    return this.httpClient.get<Coupon>("http://localhost:8080/company/coupon/" + id);
  }

  public getAllCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/company/coupon");
  }

  public getCouponByPrice(price): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/company/couponByPrice/" + price);
  }

  public getCouponByType(type): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/company/couponByType/" + type);
  }

  public getCompanyById(id: number): Observable<Company> {
    return this.httpClient.get<Company>("http://localhost:8080/company/company/" + id);
  }

  public updateCoupon(coupon: Coupon): Observable<Coupon> {
    return this.httpClient.put<Coupon>("http://localhost:8080/company/coupon/" + coupon.id, coupon);
  }

  public getCouponById(id:number): Observable<Coupon> {
    return this.httpClient.get<Coupon>("http://localhost:8080/company/coupon/" + id);
  }

  public updateCompany(company: Company): Observable<Company> {
    return this.httpClient.put<Company>("http://localhost:8080/company/company/" + company.id, company);
  }

}
