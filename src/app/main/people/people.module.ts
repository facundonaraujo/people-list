import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { PeopleComponent } from './people.component';
import { PeopleTableComponent } from './peopleTable/peopleTable.component';
import { PeopleGridComponent } from './peopleGrid/peopleGrid.component';
import { PeopleService } from '../people.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PeopleComponent
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxPaginationModule,
  ],
  declarations: [
    PeopleComponent,
    PeopleTableComponent,
    PeopleGridComponent
  ],
  providers: [PeopleService],
})
export class PeopleModule { }
