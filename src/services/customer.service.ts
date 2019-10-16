import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/models/customer';


@Injectable({
    providedIn: 'root'
})
export class CustomersService{
    public constructor (private httpClient: HttpClient){}

<<<<<<< HEAD
// public getAllCustomers(): Observable<Customer[]>{
//     return this.httpClient.get<Customer[]>("http://localhost:8080/admin/customer");
// }


}
=======
public getAllCustomers(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>("http://localhost:8080/admin/customer");
}


}

>>>>>>> f58ff6de4f7b2766212642dfc25bcefae1d4cc4f
