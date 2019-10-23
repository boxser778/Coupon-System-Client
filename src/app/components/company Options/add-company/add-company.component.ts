import { Component, OnInit } from '@angular/core';
import { Company } from 'src/models/company';
import { Router } from '@angular/router';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent {

  public company = new Company();

  constructor(private adminService: AdminService, private router: Router) { }

 public addCompany():void {
   this.addCompany,this.adminService
   .addCompany(this.company)
   .subscribe(
   company => {
     alert("Company has been successfully Added.");
     
     this.router.navigate(["admin/companys"]);
   },
   err => alert("Company Name Allready Exist"));
 }

}
