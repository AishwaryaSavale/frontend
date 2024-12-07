import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

   private loadingAction="Loading..."

   getLoadingAction(){
    return this.loadingAction
   }
  

   setLoadingAction(loadingAction:any){
    this.loadingAction=loadingAction
   }
  


  constructor(private http:HttpClient) { }

  getAllUsers():Observable<any>{
    return this.http.get('http://localhost:3333/api/getUser')
  }

  addUser(userForm:any):Observable<any>{
    return this.http.post('http://localhost:3333/api/addUser',userForm)
  }

  getUserDetail(id:any):Observable<any>{
    return this.http.get(`http://localhost:3333/api/getUserId/${id}`)
  }
   
  updateUser(id:any,userForm:any):Observable<any>{
    return this.http.put(`http://localhost:3333/api/updateUser/${id}`,userForm)
  }

  deleteUser(id:any):Observable<any>{
    return this.http.delete(`http://localhost:3333/api/deleteUser/${id}`)
  }


    /*   Nurse */ 


  getAllNt():Observable<any>{
    return this.http.get('http://localhost:3333/getnt')
  }

  addNt(ntForm:any):Observable<any>{
    return this.http.post('http://localhost:3333/addnt',ntForm)
  }

  getNtDetail(id:any):Observable<any>{
    return this.http.get(`http://localhost:3333/getntId/${id}`)
  }
   
  updateNt(id:any,ntForm:any):Observable<any>{
    return this.http.put(`http://localhost:3333/updatent/${id}`,ntForm)
  }

  deleteNt(id:any):Observable<any>{
    return this.http.delete(`http://localhost:3333/deletent/${id}`)
  }

}
