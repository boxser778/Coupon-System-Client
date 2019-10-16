import { Injectable } from "@angular/core";
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from 'src/models/company';


@Injectable({

    providedIn: 'root'
})

export class CompanysService {
    
    public constructor (private httpClient: HttpClient){}

    // public getAllCompanys(): Observable<Company[]> {
    //     return this.httpClient.get<Company[]>("http://localhost:8080/admin/company");
    // }

    // public getOneCompany(id:number): Observable<Company>{
    //     return this.httpClient.get<Company>("http://localhost:8080/admin/company/" + id);
    // }

    // public addCompany(company: Company): Observable<Company>{
    //     return this.httpClient.post<Company>("http://localhost:8080/admin/company", company);
    // }

    // public deleteCompany(id: number): Observable<undefined>{
    //     return this.httpClient.delete<undefined>("http://localhost:8080/admin/company" + id);
    // }

}
=======
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Company } from "src/models/company";

@Injectable({
  providedIn: "root"
})
export class CompanysService {
  public constructor(private httpClient: HttpClient) {}

  public getAllCompanys(): Observable<Company[]> {
    return this.httpClient.get<Company[]>("http://localhost:8080/admin/company");
  }

  public addCompany(): Observable<Company[]> {
    return this.httpClient.post<Company[]>("http://localhost:8080/admin/company" , Company);
  }

  public getOneCompany(comapny:Company) : Observable<Company>{
    return this.httpClient.get<Company>("http://localhost:8080/admin/company/{id}" + comapny.id);
  }

  // public updateCompany(company:Company) : Observable<Company>{
  //   return this.httpClient.put<Company>("http://localhost:8080/admin/company"+ company.id);
  // }

  public deleteCompany(company: Company): Observable<undefined>{
    return this.httpClient.delete<undefined>("http://localhost:8080/admin/company/{id}")
  }
}
>>>>>>> f58ff6de4f7b2766212642dfc25bcefae1d4cc4f
