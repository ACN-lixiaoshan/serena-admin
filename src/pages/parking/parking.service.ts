import { Injectable } from '@angular/core';

@Injectable()
export class ParkingService{
    isLogined:boolean = false;
    parking: Array < any > = [
     {"index":1,
     "parking":"五一路",
     "distant":"3公里",
     "time":"4.5小时",
     "price":3,
     "telphone":1234567},
     {"index":2,
     "parking":"五一路",
     "distant":"3公里",
     "time":"4.5小时",
     "price":3,
     "telphone":1234567},
     {"index":3,
     "parking":"五一路",
     "distant":"3公里",
     "time":"4.5小时",
     "price":3,
     "telphone":1234567},
     {"index":4,
     "parking":"五一路",
     "distant":"3公里",
     "time":"4.5小时",
     "price":3,
     "telphone":1234567},
     {"index":5,
     "parking":"五一路",
     "distant":"3公里",
     "time":"4.5小时",
     "price":3,
     "telphone":1234567},
     {"index":6,
     "parking":"五一路",
     "distant":"3公里",
     "time":"4.5小时",
     "price":3,
     "telphone":1234567}
  ];

    constructor(){

    }

    getParking(){
        return this.parking;
    }

}

