import { Component, OnInit } from '@angular/core';
import { Company } from 'src/models/company';
import { CompanysService } from 'src/services/company.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  public company: Company;

  public constructor(private adminsService: AdminService,private activedRoute: ActivatedRoute,private router: Router) { }

  public ngOnInit() {
    const id = +this.activedRoute.snapshot.params.id;

    this.adminsService
    .getOneCompany(id)
    .subscribe(company => {this.company = company;
    if(!company){
      alert("Company ID" + id + " Dosent Exist.");
      this.router.navigate(["/companys"]);
    }
  },
    err => alert(err.message));
  }

    public updateCompany():void {
      
      this.adminsService
      .updateCompany(this.company)
      .subscribe(
        company => {
          alert("Company has been updated!" );
  
          this.router.navigate(["/companys"]);
        },
        err => alert(err.message));
      }
}


