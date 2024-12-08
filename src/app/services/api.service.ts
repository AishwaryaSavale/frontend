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
    return this.http.get('https://day2-backend.vercel.app/api/getUser')
  }

  addUser(userForm:any):Observable<any>{
    return this.http.post('https://day2-backend.vercel.app/api/addUser',userForm)
  }

  getUserDetail(id:any):Observable<any>{
    return this.http.get(`https://day2-backend.vercel.app/api/getUserId/${id}`)
  }
   
  updateUser(id:any,userForm:any):Observable<any>{
    return this.http.put(`https://day2-backend.vercel.app/api/updateUser/${id}`,userForm)
  }

  deleteUser(id:any):Observable<any>{
    return this.http.delete(`https://day2-backend.vercel.app/api/deleteUser/${id}`)
  }


    /*   Nurse */ 


  getAllNt():Observable<any>{
    return this.http.get('https://day2-backend.vercel.app/getnt')
  }

  addNt(ntForm:any):Observable<any>{
    return this.http.post('https://day2-backend.vercel.app/addnt',ntForm)
  }

  getNtDetail(id:any):Observable<any>{
    return this.http.get(`https://day2-backend.vercel.app/getntId/${id}`)
  }
   
  updateNt(id:any,ntForm:any):Observable<any>{
    return this.http.put(`https://day2-backend.vercel.app/updatent/${id}`,ntForm)
  }

  deleteNt(id:any):Observable<any>{
    return this.http.delete(`https://day2-backend.vercel.app/deletent/${id}`)
  }

}
