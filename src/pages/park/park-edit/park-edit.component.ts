import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ParkService } from '../park.service'

@Component({
  selector: 'app-park-edit',
  templateUrl: './park-edit.component.html',
  styleUrls: ['./park-edit.component.scss']
})
export class ParkEditComponent implements OnInit,OnDestroy {
  parkId:string="";
  park:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getParkSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private parkServ:ParkService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    this.parkServ.park.push(this.park)
    this.location.back();
  }
  ngOnInit() {
    this.getParkSubscribe = this.route.params.subscribe(params=>{
      this.getPark(params['pid']).then(park=>{
      console.log(park)
      this.parkId = park.id;
      this.park = park
    }).catch(err=>{
      console.log(err)
    })
    })
  }
  ngOnDestroy(){
    this.getParkSubscribe.unsubscribe();
  }

  getPark(id: any): Promise<any> {
    
    let p = new Promise((resolve,reject)=>{
      if(id=="new"){
        let park = {name:""}
        this.isNew = true;
        resolve(park)
      }
      let park = this.parkServ.park.find(item=>item.id == id)
      if(park){
        resolve(park)
      }else{
        reject("park not found")
      }
    })
    return p
}

}
