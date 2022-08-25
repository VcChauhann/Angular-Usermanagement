import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl:String ="http://localhost:8080";
  constructor(private http:HttpClient) { }

  sendAddUserDetails(data:any){
    return this.http.post(`http://localhost:8080/addUser`,data);
  }

  getAllUsesrDetails():Observable<user[]>{
    return this.http.get<user[]>(`http://localhost:8080/allUsers`);
  }
  
  getAllUsesrDetailsTypeTwo():Observable<user[]>{
    return this.http.get<user[]>(`http://localhost:8080/allUsers`);
  }
}
