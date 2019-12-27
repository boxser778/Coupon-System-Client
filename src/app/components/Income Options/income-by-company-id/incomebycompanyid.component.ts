import { Component } from "@angular/core";
import { AdminService } from 'src/services/admin.service';
import { Income } from 'src/models/income';


@Component({ selector: "app-incomebycompanyid",
templateUrl: "./incomebycompanyid.component.html",
styleUrls: ["./incomebycompanyid.component.css"]
})
  export class IncomeByCompanyIdComponent {

    constructor(private adminService:AdminService) {}
    public chosenCompanyId:number;

    public incomes:Income[];

    public onSearch(): void{
    this.adminService.getAllCompanyIncome(this.chosenCompanyId).subscribe(incomes => {
        this.incomes = incomes;
        console.log(this.incomes);
      }),
      err => {
        alert(err.message);
        this.incomes = undefined;
      };
    }
}
