// import { Injectable } from '@angular/core';
// import { Credintials } from '../models/credintials';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { LoginResult } from 'src/models/login-result';
// import { headersToString } from 'selenium-webdriver/http';

// @Injectable({
//   providedIn: "root"
// })
// export class LoginService {
  
// public isLoggedIn: boolean;
// public type: string;

// public constructor(private httpClient: HttpClient){ }

// public isExist(credintials: Credintials): Observable<LoginResult> {
  
//   return this.httpClient.post<LoginResult>("http://localhost:8080/Login/login",credintials, {withCredentials: true});

// }

//   public logout(): void {
//     this.type = "/home";
//     this.isLoggedIn = false;
//   }
// }
