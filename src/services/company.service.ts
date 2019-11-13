import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Company } from "src/models/company";
import { Coupon } from "src/models/coupon";
import { couponType } from "src/models/couponType";
import { SERVER_COMPANY_URL } from 'src/app/const';

const COUPON_SERVER_URL = `${SERVER_COMPANY_URL}`;

@Injectable({
  providedIn: "root"
})
export class CompanysService {
  public constructor(private httpClient: HttpClient) {}

  public addCoupon(id:number, coupon: Coupon): Observable<Coupon> {
    return this.httpClient.post<Coupon>(`${COUPON_SERVER_URL}/coupon/` + id, coupon, {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    });
  }
  
  public deleteCoupon(id:number): Observable<{}> {
    return this.httpClient.delete<{ }>(`${COUPON_SERVER_URL}/coupon` + id);
  }

  public getCouponByEndDate(endDate): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(`${COUPON_SERVER_URL}/coupon/couponByDate/${endDate}`);
  }

  public getOneCoupon(id: number): Observable<Coupon> {
    return this.httpClient.get<Coupon>(`${COUPON_SERVER_URL}/coupon` + id);
  }

  public getAllCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(`${COUPON_SERVER_URL}/coupon`);
  }

  public getCouponByPrice(price): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/company/couponByPrice/" + price);
  }

  public getCouponByType(type): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/company/couponByType/" + type);
  }

  public getCompanyById(id: number): Observable<Company> {
    return this.httpClient.get<Company>(`${COUPON_SERVER_URL}/company/${id}`);
  }

  public updateCoupon(coupon: Coupon): Observable<Coupon> {
    return this.httpClient.put<Coupon>("http://localhost:8080/company/coupon/" + coupon.id, coupon);
  }

  public getCouponById(id: number): Observable<Coupon> {
    return this.httpClient.get<Coupon>(`${COUPON_SERVER_URL}/coupon/${id}`);
  }

  public updateCompany(company: Company): Observable<Company> {
    return this.httpClient.put<Company>("http://localhost:8080/company/company/" + company.id, company);
  }
}
