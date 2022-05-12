import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';

import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  car: any = [];
  base_path = environment.apiUrl;

  slides = [
      {'image': this.car.image}, 
      {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'},
      {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
      {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
      {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}
    ];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('uid');
    this.http.get(this.base_path + '/cars/view/'+id).subscribe((res:any) => {
      this.car = res[0];
      });
  }

}
