import { Component, OnInit } from "@angular/core";

import { AdminService } from 'src/services/admin.service';
import { Company } from 'src/models/company';

@Component({

    selector: 'app-companys',
    templateUrl: './companys.component.html',
    styleUrls: ['./companys.component.css']
})

export class CompanysComponent implements OnInit{
   

       public companys: Company[];

        public constructor (private adminService: AdminService) { }
       
        public ngOnInit(): void {
        this.adminService
        .getAllCompanys()
        .subscribe(
            companys => {
                return this.companys = companys;
            },
            err=>alert(err.message));
            
    }

}