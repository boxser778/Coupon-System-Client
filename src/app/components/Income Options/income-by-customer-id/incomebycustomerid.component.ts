import { Component } from '@angular/core';
import { AdminService } from 'src/services/admin.service';
import { Income } from 'src/models/income';

@Component({ selector: "app-incomebycustomerid",
templateUrl: "./incomebycustomerid.component.html",
styleUrls: ["./incomebycustomerid.component.css"]
})
  export class IncomeByCustomerIdComponent {

    constructor(private adminService:AdminService) {}
    public chosenCustomerId:number;

    public incomes:Income[];

    public onSearch(): void{
    this.adminService.getAllCustomerIncome(this.chosenCustomerId).subscribe(incomes => {
        this.incomes = incomes;
        console.log(this.incomes);
      }),
      err => {
        alert(err.message);
        this.incomes = undefined;
      };
    }
}