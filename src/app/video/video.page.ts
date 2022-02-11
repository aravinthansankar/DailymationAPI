import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NavparamService} from '../navparam.service'

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
   
  Data: any;
  constructor(private router: ActivatedRoute,private navParamService:NavparamService) { }
//  this.Data = this.navParamService.getNavData()

  ngOnInit() {
    this.Data = this.navParamService.getNavData()
    console.log(this.Data);
  }


}
