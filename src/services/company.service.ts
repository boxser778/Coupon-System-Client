import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Company } from "src/models/company";
import { Coupon } from "src/models/coupon";

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

  public getCouponByEndDate(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/company/coupon");
  }
}
