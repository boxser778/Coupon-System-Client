import { Component, OnInit } from "@angular/core";
import { CompanysService } from "src/services/company.service";
import { Router } from "@angular/router";
import { Coupon } from "src/models/coupon";
import { Company } from "src/models/company";

@Component({
  selector: "app-get-company-by-id",
  templateUrl: "./get-company-by-id.component.html",
  styleUrls: ["./get-company-by-id.component.css"]
})
export class GetCompanyByIdComponent {
  constructor(private companyService: CompanysService, private router: Router) {}

  public chosenCompanyId: number;
  activatedRoute: any;
  public company: Company;

  public onSearch() {
    this.companyService.getCompanyById(this.chosenCompanyId).subscribe(company => {
      this.company = company;
      console.log(this.company);
    }),
      err => {
        alert(err.message);
        this.company = undefined;
      };
  }
}
