import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parking-item',
  templateUrl: './parking-item.component.html',
  styleUrls: ['./parking-item.component.scss']
})
export class ParkingItemComponent implements OnInit {
@Input() user:any
  @Output() userClick = new EventEmitter<any>();
  constructor() { 
  }
  onUserClick(){
    this.userClick.emit(this.user)
  }
  ngOnInit() {
  }
}
