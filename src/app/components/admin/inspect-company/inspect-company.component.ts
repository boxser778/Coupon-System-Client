import { Component, OnInit } from "@angular/core";
import { CompanysService } from "src/services/company.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Company } from "src/models/company";
import { AdminService } from "src/services/admin.service";

@Component({
  selector: "app-inspect-company",
  templateUrl: "./inspect-company.component.html",
  styleUrls: ["./inspect-company.component.css"]
})
export class InspectCompanyComponent implements OnInit {
  public company: Company;

  constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params.id;

    this.adminService.getOneCompany(id).subscribe(
      company => {
        this.company = company;
        if (!company) {
          alert("Company Id " + id + " dosen't Exist.");
          this.router.navigate(["/companys"]);
        }
      },
      err => alert(err.message)
    );
  }

  public goBack(): void {
    this.router.navigate(["admin/companys"]);
  }
}
