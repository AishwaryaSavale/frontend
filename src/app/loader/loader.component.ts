import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent implements OnInit{

  loadingAction=" "
  loadingAction2=""

  constructor(private service:ApiService){}

  ngOnInit():void{
   this.loadingAction=this.service.getLoadingAction()
   this.loadingAction2=this.service.getLoadingAction2()
  }

}
