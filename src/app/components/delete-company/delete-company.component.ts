import { Component, OnInit } from '@angular/core';
import { Company } from 'src/models/company';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html'
})
export class DeleteCompanyComponent implements OnInit {

  public company: Company;

  constructor(private adminService: AdminService, private activeatedRoute: ActivatedRoute, private router: Router) { }

  public ngOnInit(): void {

    const id = +this.activeatedRoute.snapshot.params.id;

    this.adminService
    .getOneCompany(id)
    .subscribe(
    company => {
      this.company = company;
      if(!company) {
        alert("Company Id " + id + " Dosent Exist.");
        this.router.navigate(["/companys"]);
      }
    },
    err => alert(err.message));

  }

  public deleteCompany(): void {  
    this.adminService
    .deleteCompany(this.company.id)
    .subscribe(
      () => {
        alert("Company has been successfully deleted");
        this.router.navigate(["/companys"]);
      },
      err => alert(err.message));
    
    }

    public cancelDelete(): void {
        this.router.navigate(["/companys"]);
    }
  }

