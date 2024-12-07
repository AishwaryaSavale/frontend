import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { LoaderComponent } from "../loader/loader.component";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf, LoaderComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  constructor(private router: Router, private service: ApiService, private toaster: ToastrService, private activatedRoute: ActivatedRoute) { }
  loading = false
  isEdit = false

  userForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    userName: new FormControl('', [Validators.required, Validators.email]),
    mobileNo: new FormControl('', Validators.required),
    bloodGroup: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required)
  })
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const userId = params.get('userId');
      if (userId) {
        this.isEdit = true;
        this.getUserDetail(userId);
        this.getNtDetail(userId);
      }
    });
  }

  getUserDetail(userId: any) {
    this.service.getUserDetail(userId).subscribe({
      next: (data: any) => {
        console.log(data);
        if (data.status) {
          this.userForm.controls['fullName'].setValue(data.message.fullName)
          this.userForm.controls['userName'].setValue(data.message.userName)
          this.userForm.controls['mobileNo'].setValue(data.message.mobileNo)
          this.userForm.controls['bloodGroup'].setValue(data.message.bloodGroup)
          this.userForm.controls['dob'].setValue(data.message.dob)
        } else {
          this.toaster.error("Server Error !!")
        }
      }
    })
  }

  addUser() {
    if (!this.isEdit) {
      this.service.setLoadingAction("Adding Patient...")
      this.loading = true
      console.log(this.userForm.value)
      setTimeout(() => {
        this.service.addUser(this.userForm.value).subscribe({
          next: (data: any) => {
            this.loading = false
            if (data.status) {
              this.toaster.success("Patient Added!! ", "Success", { closeButton: true, timeOut: 2000 })
              this.userForm.reset()
              this.router.navigateByUrl('')
            } else {
              this.toaster.error("Server Error", "Error", { closeButton: true, timeOut: 2000 })
            }
          }
        })
      }, 2000);
    } else {
      this.service.setLoadingAction("Updating Patient...")
      this.loading = true
      console.log(this.userForm.value)
      setTimeout(() => {
        let uId: any = this.activatedRoute.snapshot.paramMap.get('userId')
        this.service.updateUser(uId, this.userForm.value).subscribe({
          next: (data: any) => {
            if (data.status) {
              this.loading = false
              this.toaster.success("Patient Updated!! ", "Success", { closeButton: true, timeOut: 2000 }) 
              this.router.navigateByUrl('')
            } else {
              this.toaster.error("Server Error", "Error", { closeButton: true, timeOut: 2000 })
            }
          }
        })
      }, 2000);
    }
  }


                     /*Nurse*/


                     ntForm = new FormGroup({
                      fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
                      mobileNo: new FormControl('', Validators.required),
                      gender: new FormControl('', Validators.required),
                    })
              
                  
                    getNtDetail(userId: any) {
                      this.service.getNtDetail(userId).subscribe({
                        next: (data: any) => {
                          console.log(data);
                          if (data.status) {
                            this.ntForm.controls['fullName'].setValue(data.message.fullName)
                            this.ntForm.controls['mobileNo'].setValue(data.message.mobileNo)
                            this.ntForm.controls['gender'].setValue(data.message.gender)
                          } else {
                            this.toaster.error("Server Error !!")
                          }
                        }
                      })
                    }
                  
                    addNt() {
                      if (!this.isEdit) {
                        this.service.setLoadingAction("Adding Nurse...")
                        this.loading = true
                        console.log(this.ntForm.value)
                        setTimeout(() => {
                          this.service.addNt(this.ntForm.value).subscribe({
                            next: (data: any) => {
                              this.loading = false
                              if (data.status) {
                                this.toaster.success("Nurse Added!! ", "Success", { closeButton: true, timeOut: 2000 })
                                this.ntForm.reset()
                                this.router.navigateByUrl('')
                              } else {
                                this.toaster.error("Server Error", "Error", { closeButton: true, timeOut: 2000 })
                              }
                            }
                          })
                        }, 2000);
                      } else {
                        this.service.setLoadingAction("Updating Nurse...")
                        this.loading = true
                        console.log(this.ntForm.value)
                        setTimeout(() => {
                          let uId: any = this.activatedRoute.snapshot.paramMap.get('userId')
                          this.service.updateNt(uId, this.ntForm.value).subscribe({
                            next: (data: any) => {
                              if (data.status) {
                                this.loading= false
                                this.toaster.success("Nurse Updated!! ", "Success", { closeButton: true, timeOut: 2000 }) 
                                this.router.navigateByUrl('')
                              } else {
                                this.toaster.error("Server Error", "Error", { closeButton: true, timeOut: 2000 })
                              }
                            }
                          })
                        }, 2000);
                      }
                    }
                  
          
                  




  onClickBack() {
    this.router.navigateByUrl("")
  }
   
  goBack(){
    this.router.navigateByUrl("")
  }

}