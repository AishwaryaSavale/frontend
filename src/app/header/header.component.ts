import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderComponent } from "../loader/loader.component";
import { NgFor, NgIf } from '@angular/common';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  

  constructor(private router:Router){}

  
  addData(){
    this.router.navigateByUrl('form')
  }
  viewData(){
    this.router.navigateByUrl('table')
  }

}
