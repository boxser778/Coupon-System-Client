<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { Credintials } from '../models/credintials';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResult } from 'src/models/login-result';
import { headersToString } from 'selenium-webdriver/http';
=======
import { Injectable } from "@angular/core";
import { Credintials } from "../models/credintials";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginResult } from "src/models/login-result";
>>>>>>> f58ff6de4f7b2766212642dfc25bcefae1d4cc4f

@Injectable({
  providedIn: "root"
})
export class LoginService {
<<<<<<< HEAD
  
public isLoggedIn: boolean;
public type: string;

public constructor(private httpClient: HttpClient){ }

// the server must return one of the following jsons:
// {"isLoggedIn:" true , "type": "customer" }
// {"isLoggedIn:" true , "type": "company" }
// {"isLoggedIn:" true , "type": "admin" }
// {"isLoggedIn:" false , "type": "" }
public isExist(credintials: Credintials): Observable<LoginResult> {
  
//   real server:http://loaclhost:8080/my-project/login

  return this.httpClient.post<LoginResult>("http://localhost:8080/Login/login",credintials, {withCredentials: true});

//   demo server:
//   return this.httpClient.get<LoginResult>("/assets/json/server-demo.json");
}

// public isExistDemo(credintials: Credintials): boolean {
//     if(credintials.type === "customer" && credintials.username === "1" && credintials.password === "1") {
//    this.isLoggedIn = true;
//    this.type = credintials.type;
//       return true;
// }
//   if(credintials.type === "company" && credintials.username === "2" && credintials.password === "2") {
//     this.isLoggedIn = true;
//     this.type = credintials.type;
//     return true;  
// }
//   if(credintials.type === "admin" && credintials.username === "3" && credintials.password === "3"){
//     this.isLoggedIn = true;
//     this.type = credintials.type;
//     return true;
// }
// return false;

//   }
=======
  public isLoggedIn: boolean;
  public type: string;

  public constructor(private httpClient: HttpClient) {}

  //the server must return one of the following jsons:
  //{"isLoggedIn:" true , "type": "customer" }
  //{"isLoggedIn:" true , "type": "company" }
  //{"isLoggedIn:" true , "type": "admin" }
  //{"isLoggedIn:" false , "type": "" }
  public isExist(credintials: Credintials): Observable<LoginResult> {
    //real server:
    // return this.httpClient.post<LoginResult>("http://loaclhost:8080/CouponSystem/login",credintials, {withCredentials: true});

    //demo server:
    return this.httpClient.get<LoginResult>("/assets/json/server-demo.json");
  }

  public isExistDemo(credintials: Credintials): boolean {
    if (credintials.type === "customer" && credintials.username === "1" && credintials.password === "1") {
      this.isLoggedIn = true;
      this.type = credintials.type;
      return true;
    }
    if (credintials.type === "company" && credintials.username === "2" && credintials.password === "2") {
      this.isLoggedIn = true;
      this.type = credintials.type;
      return true;
    }
    if (credintials.type === "admin" && credintials.username === "3" && credintials.password === "3") {
      this.isLoggedIn = true;
      this.type = credintials.type;
      return true;
    }
    return false;
  }
>>>>>>> f58ff6de4f7b2766212642dfc25bcefae1d4cc4f

  public logout(): void {
    this.type = "/home";
    this.isLoggedIn = false;
  }
}
