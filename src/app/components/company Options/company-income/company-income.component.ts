import { Component } from '@angular/core';
import { CompanysService } from 'src/services/company.service';
import { LoginServiceService } from 'src/services/loginServiceService';
import { Income } from 'src/models/income';

@Component({
    selector: "app-company-income",
    templateUrl: "./company-income.component.html",
    styleUrls: ["./company-income.component.css"]
  })
  export class CompanyIncomeComponent {

    constructor(private companyService:CompanysService,private loginService: LoginServiceService,) {}

    public incomes:Income[];

    public onSearch(): void{
    this.companyService.getAllCompanyIncome(this.loginService.id).subscribe(incomes => {
        this.incomes = incomes;
        console.log(this.incomes);
      }),
      err => {
        alert(err.message);
        this.incomes = undefined;
      };
    }
  }