import { Component } from "@angular/core";
import { CustomersService } from 'src/services/customer.service';
import { Income } from 'src/models/income';
import { LoginServiceService } from 'src/services/loginServiceService';

@Component({
  selector: "app-customer-income",
  templateUrl: "./customer-income.component.html",
  styleUrls: ["./customer-income.component.css"]
})
export class CustomerIncomeComponent {

    constructor(private customerService:CustomersService,private loginService: LoginServiceService,) {}

    public incomes:Income[];

    public onSearch(): void{
    this.customerService.getAllCustomerIncome(this.loginService.id).subscribe(incomes => {
        this.incomes = incomes;
        console.log(this.incomes);
      }),
      err => {
        alert(err.message);
        this.incomes = undefined;
      };
    }

}
