import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { ParkingListComponent } from './parking-list/parking-list.component';
import { ParkingEditComponent } from './parking-edit/parking-edit.component';
import { ParkingItemComponent } from './parking-item/parking-item.component';

// Providers
import { ParkingService } from './parking.service';

@NgModule({
  imports: [
    // Import Official Shared Module
    CommonModule,
    FormsModule,

    // Config Router
    RouterModule.forChild([
      { path: '', component: ParkingListComponent, pathMatch: 'full' },
      { path: 'parking/edit/:pid', component: ParkingEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [ParkingListComponent, ParkingEditComponent, ParkingItemComponent],
  providers:[ParkingService]
})
export class ParkingModule { }
