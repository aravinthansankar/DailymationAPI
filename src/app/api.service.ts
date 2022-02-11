import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

  getDataDailymation(Mysearch) {
    return this.http.get('https://api.dailymotion.com/videos?limit=10&page=1&unpublished=false&sort=trending&private=false&search='+Mysearch+'&fields=embed_url%2Ctitle%2Cthumbnail_480_url%2Cduration%2Cdescription&ssl_assets=false')
  }
}
