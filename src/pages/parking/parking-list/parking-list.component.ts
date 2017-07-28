import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import {ParkingService} from '../parking.service';

@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.scss']
})

export class ParkingListComponent implements OnInit {
  parking:Array<any> = [];

  deleteLast(){
    this.parking.pop()
  }

  sortByAsccending(){
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.parking.sort(function (a, b) {
      if (a.index > b.index) {
        return 1;
      }
      if (a.index < b.index) {
        return -1;
      }
      return 0;
    });
  }
  sortByDesccending(){
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.parking.sort(function (a, b) {
      if (a.index > b.index) {
        return -1;
      }
      if (a.index < b.index) {
        return 1;
      }
      return 0;
    });
  }
  sortByRadom(){
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.parking.sort(function (a, b) {
      if (5 > Math.random() * 10) {
        return -1;
      }
      if (5 < Math.random() * 10) {
        return 1;
      }
      return 0;
    });
  }

 delete(park){
    let parkIndex = park.index;
    this.parkServ.parking.forEach((item,index,array)=>{
      if(item.index == parkIndex){
        array.splice(index,1)
      }
    })
  }
  constructor(meta: Meta, title: Title, private parkServ:ParkingService) {
    this.parking = this.parkServ.getParking()

    title.setTitle('Parking List Page');

    meta.addTags([
      {
        name: 'author', content: 'eddic'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ]);
  }

  ngOnInit() {
  }

}
