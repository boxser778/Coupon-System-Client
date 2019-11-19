import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_CUSTOMER_URL } from 'src/app/const';
import { Coupon } from 'src/models/coupon';
import { couponType } from 'src/models/couponType';

const COUPON_SERVER_URL = `${SERVER_CUSTOMER_URL}`;
@Injectable({
    providedIn: 'root'
})
export class CustomersService{
    public constructor (private httpClient: HttpClient){}

    public getAllCoupons(id:number): Observable<Coupon[]> {
        return this.httpClient.get<Coupon[]>(`${COUPON_SERVER_URL}/coupon/${id}`);
      }

      public purchaseCoupon(id:number,coupon:Coupon): Observable<Coupon> {
        return this.httpClient.post<Coupon>(`${COUPON_SERVER_URL}/coupon/${id}` ,coupon);
      }

      public getCouponByPrice(customerid:number,price:number): Observable<Coupon[]> {
        return this.httpClient.get<Coupon[]>(`${COUPON_SERVER_URL}/couponbyprice/${customerid}/${price}`);
      }

      public getCouponByType(customerid:number,type:couponType): Observable<Coupon[]> {
        return this.httpClient.get<Coupon[]>(`${COUPON_SERVER_URL}/couponbytype/${customerid}/${type}`);
      }

      public getOneCoupon(companyid: number,couponid:number): Observable<Coupon> {
        return this.httpClient.get<Coupon>(`${COUPON_SERVER_URL}/coupon/${companyid}/${couponid}`);
      }

  

}
