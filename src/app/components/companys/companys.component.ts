import { Component, OnInit } from "@angular/core";
<<<<<<< HEAD

import { AdminService } from 'src/services/admin.service';
import { Company } from 'src/models/company';
=======
import { Company } from 'src/models/company';
import { CompanysService } from 'src/services/company.service';
>>>>>>> f58ff6de4f7b2766212642dfc25bcefae1d4cc4f

@Component({

    selector: 'app-companys',
    templateUrl: './companys.component.html',
    styleUrls: ['./companys.component.css']
})

export class CompanysComponent implements OnInit{

<<<<<<< HEAD
       public companys: Company[];
        
        public constructor (private adminService: AdminService) { }
       
        public ngOnInit(): void {
        this.adminService
        .getAllCompanys()
        .subscribe(
            companys => {
                return this.companys = companys;
            },
=======
        public companys: Company[];
        
        public constructor (private companysService: CompanysService) { }

    public ngOnInit():void{
        this.companysService
        .getAllCompanys()
        .subscribe(
            companys=> this.companys = companys,
>>>>>>> f58ff6de4f7b2766212642dfc25bcefae1d4cc4f
            err=>alert(err.message));
    }

}