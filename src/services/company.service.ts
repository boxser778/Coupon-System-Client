import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Company } from "src/models/company";
import { Coupon } from "src/models/coupon";
import { couponType } from "src/models/couponType";
import { SERVER_COMPANY_URL } from 'src/app/const';
import { LoginServiceService } from './loginServiceService';
import { UrlsServiceService } from './UrlsServiceService';

const COMPANY_SERVER_URL = `${SERVER_COMPANY_URL}`;

@Injectable({
  providedIn: "root"
})
export class CompanysService {
  public constructor(private httpClient: HttpClient,private loginService:LoginServiceService,private urlsService:UrlsServiceService) {}

  public addCoupon(coupon: Coupon,id:number): Observable<Coupon> {
    return this.httpClient.post<Coupon>(`${COMPANY_SERVER_URL}/coupon/${id}` , coupon, {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    });
  }
  
  public deleteCoupon(companyid:number,couponid:number): Observable<{}> {
    return this.httpClient.delete<{}>(`${COMPANY_SERVER_URL}/coupon/${companyid}/${couponid}`);
  }

  public updateCoupon(couponid:number,coupon: Coupon): Observable<Coupon> {
    return this.httpClient.put<Coupon>(`${COMPANY_SERVER_URL}/coupon/${couponid}`,coupon);
  }
 
  public getCompanyById(companyid:number): Observable<Company> {
    return this.httpClient.get<Company>(`${COMPANY_SERVER_URL}/company/${companyid}`);
  }

  public getAllCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(`${COMPANY_SERVER_URL}/coupon`);
  }

  public getCouponByEndDate(companyid:number,endDate:number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(`${COMPANY_SERVER_URL}/couponbyenddate/${companyid}/${endDate}`);
  }

  public getCouponByPrice(companyid:number,price:number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(`${COMPANY_SERVER_URL}/couponbyprice/${companyid}/${price}`);
  }

  public getCouponByType(companyid:number,type:couponType): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(`${COMPANY_SERVER_URL}/couponbytype/${companyid}/${type}`);
  }

  public getOneCoupon(companyid: number,couponid:number): Observable<Coupon> {
    return this.httpClient.get<Coupon>(`${COMPANY_SERVER_URL}/coupon/${companyid}/${couponid}`);
  }

}
