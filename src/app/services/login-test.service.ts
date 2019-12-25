import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "src/models/user";

@Injectable({
  providedIn: "root"
})

export class LoginTestService {
  constructor(private http: HttpClient) {}
  public loginUrl = "http://localhost:8080/coupon-system/Login";
  public getLoginUrl() {
    return this.loginUrl;
  }

  login(user): Observable<any> {
    return this.http.post(this.loginUrl, user);
  }

}


