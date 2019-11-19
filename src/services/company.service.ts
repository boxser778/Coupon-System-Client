import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Company } from "src/models/company";
import { Coupon } from "src/models/coupon";
import { couponType } from "src/models/couponType";
import { SERVER_COMPANY_URL } from 'src/app/const';
import { LoginServiceService } from './loginServiceService';
import { UrlsServiceService } from './UrlsServiceService';

const COUPON_SERVER_URL = `${SERVER_COMPANY_URL}`;

@Injectable({
  providedIn: "root"
})
export class CompanysService {
  public constructor(private httpClient: HttpClient,private loginService:LoginServiceService,private urlsService:UrlsServiceService) {}

  public addCoupon(id:number, coupon: Coupon): Observable<Coupon> {
    return this.httpClient.post<Coupon>(`${COUPON_SERVER_URL}/coupon/` + id, coupon, {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    });
  }
  
  public deleteCoupon(id:number): Observable<{}> {
    return this.httpClient.delete<{}>(`${COUPON_SERVER_URL}/coupon/${id}`);
  }

  public getCouponByEndDate(companyid:number,endDate:number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(`${COUPON_SERVER_URL}/couponbyenddate/${companyid}/${endDate}`);
  }

  public getOneCoupon(companyid: number,couponid:number): Observable<Coupon> {
    return this.httpClient.get<Coupon>(`${COUPON_SERVER_URL}/coupon/${companyid}/${couponid}`);
  }

  public getAllCoupons(companyid:number): Observable<Coupon[]> {
    // let url = this.urlsService.getCompanyUrl() + this.getAllCoupons + "/"+ id + this.loginService.token;
    return this.httpClient.get<Coupon[]>(`${COUPON_SERVER_URL}/coupon/${companyid}`);
  }

  public getCouponByPrice(companyid:number,price:number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(`${COUPON_SERVER_URL}/couponbyprice/${companyid}/${price}`);
  }

  public getCouponByType(companyid:number,type:couponType): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(`${COUPON_SERVER_URL}/couponbytype/${companyid}/${type}`);
  }

  public getCompanyById(companyid:number): Observable<Company> {
    return this.httpClient.get<Company>(`${COUPON_SERVER_URL}/company/${companyid}`);
  }

  public updateCoupon(couponid:number,coupon: Coupon): Observable<Coupon> {
    return this.httpClient.put<Coupon>(`${COUPON_SERVER_URL}/company/coupon/${couponid}` ,  coupon);
  }

  // public getCouponById(id: number): Observable<Coupon> {
  //   return this.httpClient.get<Coupon>(`${COUPON_SERVER_URL}/coupon/${id}`);
  // }

  public updateCompany(company: Company): Observable<Company> {
    return this.httpClient.put<Company>("http://localhost:8080/company/company/" + company.id, company);
  }
}
