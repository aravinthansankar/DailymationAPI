import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import {NavparamService} from '../navparam.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   public Topic: any;
   public searchData:any;
  constructor(public api:ApiService,private router: Router,private navParamService:NavparamService) {}

  search(){
    this.api.getDataDailymation(this.Topic).subscribe(result =>{
     //  console.log(result);
       this.searchData=result['list'];
       console.log(this.searchData);
    });
  }

  videoUrlHolder(data) {
    this.navParamService.setNavData(data)
    this.router.navigate(['Video/'])
    console.log(data)
  }

}
