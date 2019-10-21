// import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
// import { Observable } from "rxjs";
// import { Coupon } from "src/models/coupon";
// import { SERVER_ADMIN_URL } from "src/app/consts";

// const COUPON_SERVER_URL = `${SERVER_ADMIN_URL}/coupon`;

// @Injectable({
//   providedIn: "root"
// })
// export class CouponsService {
//   public constructor(private httpClient: HttpClient) {}

//   public getAllCoupons(): Observable<Coupon[]> {
//     return this.httpClient.get<Coupon[]>("http://localhost:8080/admin/coupon");
//   }
//   public getCouponById(id: string): Observable<Coupon> {
//     return this.httpClient.get<Coupon>(`${COUPON_SERVER_URL}/${id}`);
//   }
// }
