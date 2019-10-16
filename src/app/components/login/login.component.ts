<<<<<<< HEAD
// import { Component } from '@angular/core';
// import { Credintials } from 'src/models/credintials';
// import { LoginService } from 'src/services/login.service';
// import { Router } from '@angular/router';
// import { HttpErrorResponse } from '@angular/common/http';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

//   public cerdintials = new Credintials();
//   public clientTypes = ['ADMIN','COMPANY','CUSOTMER'];

//   public constructor(public loginservice: LoginService, private router: Router) { }

//   //real server:
//   public login(): void {
//     this.loginservice.isExist(this.cerdintials).subscribe(loginResult => {
//       if (!loginResult) {
//         alert("internal server error!!!!");
//       }
//       else if (loginResult.isLoggedIn) {
//         alert("incorrect username and password!!!!");
//       }
//       else {
//         this.loginservice.isLoggedIn = false;
//         this.loginservice.type = loginResult.type;

//         if (this.cerdintials.type === "ADMIN") {
//           this.router.navigate(["/admin"]);
//         }
//         else if (this.cerdintials.type === "COMPANY") {
//           this.router.navigate(["/company"])
//         }
//         else if (this.cerdintials.type === "CUSTOMER") {
//           this.router.navigate(["/customer"])
//         }
//       }
//     });

//   }

// }

// //demo server:
//   // public loginDemo():void {
//   //   if(this.loginservice.isExist(this.cerdintials)) {
//   //       if(this.cerdintials.type === "customer") {
//   //       this.router.navigate(["/customer"]);
//   //   }
//   //   else if(this.cerdintials.type === "company"){
//   //   this.router.navigate(["/company"])
//   //   }
//   //    else if(this.cerdintials.type === "admin"){
//   //     this.router.navigate(["/admin"])
//   //   }
//   // }

//   // else {

//   //   alert("incorrect username and password!!!!");

//   //   }
//   // }
// // }





import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ResponseCodes } from 'src/models/ResponseCodes';
import { LoginServiceService } from 'src/services/loginServiceService';
=======
import { Component } from "@angular/core";
import { Credintials } from "src/models/credintials";
import { LoginService } from "src/services/login.service";
import { Router } from "@angular/router";
>>>>>>> f58ff6de4f7b2766212642dfc25bcefae1d4cc4f

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
<<<<<<< HEAD
export class LoginComponent implements OnInit {

  public imageWidth: number;
  @ViewChild('f') userLoginForm: NgForm;
  obsSubscription: Subscription = null;

  public constructor(private title: Title, private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
    this.title.setTitle("login to coupon")
    this.imageWidth = 250;
  }
  public increaseWidth(): void {
    this.imageWidth += 10;
  }
  public decreaseWidth(): void {
    this.imageWidth -= 10;
=======
export class LoginComponent {
  public cerdintials = new Credintials();

  public constructor(
    public loginservice: LoginService,
    private router: Router
  ) {}

  //real server:
  public login(): void {
    this.loginservice.isExist(this.cerdintials).subscribe(loginResult => {
      if (!loginResult.isLoggedIn) {
        alert("incorrect username and password!!!!");
      } else {
        this.loginservice.isLoggedIn = true;
        this.loginservice.type = loginResult.type;

        if (loginResult.type === "customer") {
          this.router.navigate(["/customer"]);
        } else if (loginResult.type === "company") {
          this.router.navigate(["/company"]);
        } else if (loginResult.type === "admin") {
          this.router.navigate(["/admin"]);
        }
      }
    });
  }

  //demo server:
  public loginDemo(): void {
    if (this.loginservice.isExistDemo(this.cerdintials)) {
      if (this.cerdintials.type === "customer") {
        this.router.navigate(["/customer"]);
      } else if (this.cerdintials.type === "company") {
        this.router.navigate(["/company"]);
      } else if (this.cerdintials.type === "admin") {
        this.router.navigate(["/admin"]);
      }
    } else {
      alert("incorrect username and password!!!!");
    }
>>>>>>> f58ff6de4f7b2766212642dfc25bcefae1d4cc4f
  }
  public resetWidth(): void {
    this.imageWidth = 250;
  }

  onSubmit() {
    let username = this.userLoginForm.value.username;
    let password = this.userLoginForm.value.password;
    let clientType = this.userLoginForm.value.clientType;

<<<<<<< HEAD
    this.loginService.login(username, password, clientType).subscribe(res => {
        if (clientType === "ADMIN") { this.router.navigate(["/admin"]) //navigate to admin page
          if (res.status === ResponseCodes.OK) { this.loginService.token = res.body; localStorage.setItem("token", res.body); this.loginService.setAdminUser(); console.log("admin is logged in !"); console.log(this.loginService.token)}
          else { console.log(res.status); }
        }
        if (clientType === "CUSTOMER") { this.router.navigate(["/customer"])//navigate to customer page
          if (res.status === ResponseCodes.OK){ this.loginService.token = res.body;  localStorage.setItem("token", res.body);  this.loginService.setCustomerUser(); console.log("customer is logged in !"); console.log(this.loginService.token)}
          else { console.log(res.status); }
        }
        if (clientType === "COMPANY") {  this.router.navigate(["/company"])//navigate to company page
          if (res.status === ResponseCodes.OK) { this.loginService.token = res.body;  localStorage.setItem("token", res.body);  this.loginService.setCompanyUser(); console.log("company is logged in !"); console.log(this.loginService.token)}
          else { console.log(res.status); }
        }
      },
      err => {
        let error: HttpErrorResponse = err;
        if (error.error === ResponseCodes.UNAUTHORIZED) { console.log("unautorized!!!") }
        else { console.log(error.error) }
      });
  }

  ngOnDestroy(): void {
    if (this.obsSubscription != null) {
      this.obsSubscription.unsubscribe();
    }
  }
=======
>>>>>>> f58ff6de4f7b2766212642dfc25bcefae1d4cc4f
}
