import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  StoreList: any[] = [];
  base_path = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadMarket();
  }

  loadMarket () {
    this.http
      .get(this.base_path + '/cars').subscribe((res:any) => {
        this.StoreList = res;
      });
  }

}
