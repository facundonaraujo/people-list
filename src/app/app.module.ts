import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { ErrorComponent } from './main/error/error.component';
import { PeopleService } from './main/people.service';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/people/people.module').then(m => m.PeopleModule),
  },
  {
    path: '**',
    component: ErrorComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
