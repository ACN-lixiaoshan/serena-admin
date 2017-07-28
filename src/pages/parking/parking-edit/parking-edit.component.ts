import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ParkingService } from '../parking.service'

@Component({
  selector: 'app-parking-edit',
  templateUrl: './parking-edit.component.html',
  styleUrls: ['./parking-edit.component.scss']
})
export class ParkingEditComponent implements OnInit,OnDestroy {
  parkingId:string="";
  parking:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getParkingSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private parkingServ:ParkingService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    this.parkingServ.parking.push(this.parking)
    this.location.back();
  }
  ngOnInit() {
    this.getParkingSubscribe = this.route.params.subscribe(params=>{
      this.getParking(params['pid']).then(parking=>{
      console.log(parking)
      this.parkingId = parking.id;
      this.parking = parking
    }).catch(err=>{
      console.log(err)
    })
    })
  }
  ngOnDestroy(){
    this.getParkingSubscribe.unsubscribe();
  }

  getParking(id: any): Promise<any> {
    
    let p = new Promise((resolve,reject)=>{
      if(id=="new"){
        let parking = {name:""}
        this.isNew = true;
        resolve(parking)
      }
      let parking = this.parkingServ.parking.find(item=>item.id == id)
      if(parking){
        resolve(parking)
      }else{
        reject("parking not found")
      }
    })
    return p
}

}
