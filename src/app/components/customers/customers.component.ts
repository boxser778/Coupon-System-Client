import { Component, OnInit } from "@angular/core";
import { Customer } from 'src/models/customer';
import { CustomersService } from 'src/services/customer.service';
import { AdminService } from 'src/services/admin.service';


@Component({

    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.css']
})
    
export class CustomersComponent implements OnInit{

        public customers: Customer[];
        
        public constructor (private adminService: AdminService) { }

    public ngOnInit():void{
        this.adminService
        .getAllCustomers()
        .subscribe(
            customers=> {
               return this.customers = customers
            },
            err=>alert(err.message));
    }
    

}