import { Component, OnInit } from "@angular/core";
import { Customer } from 'src/models/customer';
import { CustomersService } from 'src/services/customer.service';
<<<<<<< HEAD
import { AdminService } from 'src/services/admin.service';
=======
>>>>>>> f58ff6de4f7b2766212642dfc25bcefae1d4cc4f


@Component({

    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.css']
})
<<<<<<< HEAD
    
=======

>>>>>>> f58ff6de4f7b2766212642dfc25bcefae1d4cc4f
export class CustomersComponent implements OnInit{

        public customers: Customer[];
        
<<<<<<< HEAD
        public constructor (private adminService: AdminService) { }

    public ngOnInit():void{
        this.adminService
        .getAllCustomers()
        .subscribe(
            customers=> {
               return this.customers = customers
            },
=======
        public constructor (private customersService: CustomersService) { }

    public ngOnInit():void{
        this.customersService
        .getAllCustomers()
        .subscribe(
            customers=> this.customers = customers,
>>>>>>> f58ff6de4f7b2766212642dfc25bcefae1d4cc4f
            err=>alert(err.message));
    }
    

}