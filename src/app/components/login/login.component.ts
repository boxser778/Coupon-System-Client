import { Component, OnInit, ViewChild } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { ResponseCodes } from "src/models/ResponseCodes";
import { LoginServiceService } from "src/services/loginServiceService";
import { LoginTestService } from "src/app/services/login-test.service";
import { User } from "src/models/user";
import { LoginResult } from "src/models/login-result";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  public imageWidth: number;
  @ViewChild("f") userLoginForm: NgForm;
  obsSubscription: Subscription = null;
  user: User = new User();

  public constructor(
    private router: Router,
    private loginService: LoginServiceService,
    private service: LoginTestService
  ) {}

  onSubmit() {
    this.user.username = this.userLoginForm.value.username;
    this.user.password = this.userLoginForm.value.password;
    this.user.clientType = this.userLoginForm.value.clientType;

    this.service.login(this.user).subscribe(
      (res: { id: number, isLogged: boolean, type: string }) => {
        if (res.isLogged) {
          switch (res.type) {
            case "ADMIN":
              this.router.navigate(["/admin"]);
              this.loginService.setAdminUser();
              console.log(this.user)
              console.log("Wellcome Admin");
              break;
            case "COMPANY":
              this.router.navigate(["/company"]);
              this.loginService.setCompanyUser();
              console.log(this.user)
              console.log("company is logged in !");
              break;
            case "CUSTOMER":
              this.router.navigate(["/customer"]);
              this.loginService.setCustomerUser();
              console.log("customer is logged in !");
              break;
          }

          this.loginService.setId(res.id);
        }
      },
      err => {
        let error: HttpErrorResponse = err;
        if (error.error === ResponseCodes.UNAUTHORIZED) {
          console.log("unautorized!!!");
        } else {
          console.log(error.error);
        }
      }
    );
  }

  ngOnDestroy(): void {
    if (this.obsSubscription != null) {
      this.obsSubscription.unsubscribe();
    }
  }
}
