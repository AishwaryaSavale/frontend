import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { NgFor, NgIf } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [LoaderComponent,NgIf,NgFor],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {


        users:any=[]

        ntusers:any=[]

        loading=false
        loading2=false

      ngOnInit(): void {
          this.getAllusers()
          this.getAllNt()
      }

      getAllusers(){
          this.service.setLoadingAction("Getting Data...")
          this.loading=true
          setTimeout(()=>{
                this.service.getAllUsers().subscribe({
                  next:(data:any)=>{
                    this.loading=false
                    this.users=data.message
                  },error:(err:any)=>{
                    this.toaster.error('server error','error',{timeOut:1200,closeButton:true})
                  }
                })
          },1200)
      }

      constructor(private router:Router,private service:ApiService,private toaster:ToastrService){}

      editUser(id:any){
      this.router.navigateByUrl(`update/${id}`)
      }

      deleteUser(userId:any){
      this.service.deleteUser(userId).subscribe({
        next:(data:any)=>{
          if(data.status){
            this.toaster.success('Patient Deleted','success',{closeButton:true,timeOut:1200})
            this.getAllusers()
          }else{
            this.toaster.error('server Error','error',{closeButton:true,timeOut:1200})
          }
        }
      })
    }


    /*nurse*/

    
    getAllNt(){
      setTimeout(()=>{
            this.service.getAllNt().subscribe({
              next:(data:any)=>{
                this.ntusers=data.message
              },error:(err:any)=>{
                this.toaster.error('server error','error',{timeOut:1200,closeButton:true})
              }
            })
      },1200)
  }



  editNt(id:any){
  this.router.navigateByUrl(`update/${id}`)
  }

  deleteNt(userId:any){
  this.service.deleteNt(userId).subscribe({
    next:(data:any)=>{
      if(data.status){
        this.toaster.success('Nurse Deleted','success',{closeButton:true,timeOut:1200})
        this.getAllNt()
      }else{
        this.toaster.error('server Error','error',{closeButton:true,timeOut:1200})
      }
    }
  })
}


onClickBack() {
  this.router.navigateByUrl("")
}
 
goBack(){
  this.router.navigateByUrl("")
}

}
