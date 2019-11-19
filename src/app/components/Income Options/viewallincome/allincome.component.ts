import { Component } from '@angular/core';
import { Income } from 'src/models/income';
import { AdminService } from 'src/services/admin.service';

@Component({
    selector: "app-allincome",
    templateUrl: "./allincome.component.html",
    styleUrls: ["./allincome.component.css"]
  })
  export class AllIncomeComponent {
    constructor(private adminService: AdminService) {}

    public incomes:Income[];

    public onSearch(): void{
    this.adminService.allIncome().subscribe(incomes => {
        this.incomes = incomes;
        console.log(this.incomes);
      }),
      err => {
        alert(err.message);
        this.incomes = undefined;
      };
    }
    
  }