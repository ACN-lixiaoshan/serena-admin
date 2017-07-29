import { Injectable } from '@angular/core';

@Injectable()
export class ParkService{
    isLogined:boolean = false;
    park: Array < any > = [
     {"index":1,
     "park":"五一路",
     "distant":"3公里",
     "time":4,
     "price":3,
     "telphone":1234567},
     {"index":2,
     "park":"五一路",
     "distant":"3公里",
     "time":4.5,
     "price":3,
     "telphone":1234567},
     {"index":3,
     "park":"五一路",
     "distant":"3公里",
     "time":4.,
     "price":3,
     "telphone":1234567},
     {"index":4,
     "park":"五一路",
     "distant":"3公里",
     "time":4,
     "price":3,
     "telphone":1234567},
     {"index":5,
     "park":"五一路",
     "distant":"3公里",
     "time":4,
     "price":3,
     "telphone":1234567},
     {"index":6,
     "park":"五一路",
     "distant":"3公里",
     "time":4,
     "price":3,
     "telphone":1234567}
  ];

    constructor(){

    }

    getPark(){
        return this.park;
    }

}

