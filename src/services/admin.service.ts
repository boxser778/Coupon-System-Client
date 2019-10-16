import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from 'src/models/company';
import { Coupon } from 'src/models/coupon';
import { Customer } from 'src/models/customer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(private httpClient: HttpClient) { }

public addCompany(company: Company): Observable<Company>{
  return this.httpClient.post<Company>("http://localhost:8080/admin/company", company);
}

public addCustomer(customer: Customer): Observable<Customer>{
  return this.httpClient.post<Customer>("http://localhost:8080/admin/customer", customer);
}

public addCoupon(coupon: Coupon): Observable<Coupon>{
  return this.httpClient.post<Coupon>("http://localhost:8080/admin/coupon", coupon , {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
});}
 



public getAllCompanys(): Observable<Company[]> {
    return this.httpClient.get<Company[]>("http://localhost:8080/admin/company");
}

public getAllCoupons(): Observable<Coupon[]>{
  return this.httpClient.get<Coupon[]>("http://localhost:8080/admin/coupon");
}

public getAllCustomers(): Observable<Customer[]>{
  return this.httpClient.get<Coupon[]>("http://localhost:8080/admin/customer");
}




public getOneCompany(id:number): Observable<Company>{
    return this.httpClient.get<Company>("http://localhost:8080/admin/company/" + id);
}

public getOneCustomer(id:number): Observable<Customer>{
  return this.httpClient.get<Customer>("http://localhost:8080/admin/customer/" + id);
}

public getOneCoupon(id:number): Observable<Coupon>{
  return this.httpClient.get<Coupon>("http://localhost:8080/admin/coupon/" + id);
}




public deleteCustomer(id : number): Observable<{status: string, message: string}>{
  return this.httpClient.delete<{status: string, message: string}>("http://localhost:8080/admin/customer/" + id);
}

public deleteCoupon(id : number): Observable<{status: string, message: string}>{
  return this.httpClient.delete<{status: string, message: string}>("http://localhost:8080/admin/coupon/" + id);
}

public deleteCompany(id: number): Observable<{status: string, message: string}>{
  return this.httpClient.delete<{status: string, message: string}>("http://localhost:8080/admin/company/" + id);
}



public updateCompany(company: Company): Observable<Company>{
  return this.httpClient.put<Company>("http://localhost:8080/admin/company/" + company.id , company);
}

public updateCustomer(customer: Customer): Observable<Customer>{
  return this.httpClient.put<Customer>("http://localhost:8080/admin/customer/" + customer.id , customer);
}

public updateCoupon(coupon: Coupon): Observable<Coupon>{
  return this.httpClient.put<Coupon>("http://localhost:8080/admin/coupon/" + coupon.id , coupon);
}

}
