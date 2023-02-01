import { LoadingService } from './../../../services/loading.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  isLoading!:boolean;

  constructor(loadingService:LoadingService){
    // now we will be always synched with the laoding Service
    loadingService.isLoading.subscribe( (isLoading) => {
      this.isLoading = isLoading;
    })



  }


}
