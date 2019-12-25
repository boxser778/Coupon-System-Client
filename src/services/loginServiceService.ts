import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class LoginServiceService {
  
  id: number;

  constructor() {}

  private userAdmin: boolean = JSON.parse(
    localStorage.getItem("userAdmin") || "false"
  );
  private userCompany: boolean = JSON.parse(
    localStorage.getItem("userCompany") || "false"
  );
  private userCustomer: boolean = JSON.parse(
    localStorage.getItem("userCustomer") || "false"
  );
  private userName: string = JSON.parse(localStorage.getItem("username"));

  public logout() {
    this.setAdminUserF();
    this.setCompanyUserF();
    this.setCustomerUserF();
    alert("You are logout");
  }

  setId(id: number) {
    this.id = id;
  }

  isAdmin() {
    return this.userAdmin;
  }
  setAdminUser() {
    localStorage.setItem("userAdmin", "true");
    this.userAdmin = true;
  }
  setAdminUserF() {
    localStorage.setItem("userAdmin", "false");
    this.userAdmin = false;
  }

  // GET & SET & SETfalse company user
  isCompany() {
    return this.userCompany;
  }

  setCompanyUser() {
    localStorage.setItem("userCompany", "true");
    this.userCompany = true;
  }
  setCompanyUserF() {
    localStorage.setItem("userCompany", "false");
    this.userCompany = false;
  }

  // GET & SET & SETfalse customer user

  isCustomer() {
    return this.userCustomer;
  }

  setCustomerUser() {
    localStorage.setItem("userCustomer", "true");
    this.userCustomer = true;
  }
  setCustomerUserF() {
    localStorage.setItem("userCustomer", "false");
    this.userCustomer = false;
  }

  // GET user name
  getUserName() {
    return this.userName;
  }
}
