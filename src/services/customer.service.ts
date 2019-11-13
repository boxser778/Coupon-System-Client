import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/models/customer';
import { SERVER_CUSTOMER_URL } from 'src/app/const';
import { Coupon } from 'src/models/coupon';
import { Company } from 'src/models/company';

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

}
