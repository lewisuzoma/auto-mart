import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  StoreList: any[] = [];
  base_path = environment.apiUrl;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadHome();
  }

  loadHome () {
    this.http
      .get(this.base_path + '/cars').subscribe((res:any) => {
        this.StoreList = res;
      });
  }

}
