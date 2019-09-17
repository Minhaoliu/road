import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Road1Component } from './containers/road1/road1.component';
import { MapComponent } from './containers/map/map.component';
import { BaidumapComponent } from './containers/baidumap/baidumap.component';

const routes: Routes = [
  {path: 'road1', component: Road1Component},
  {path: 'map', component: MapComponent},
  {path: 'baidumap', component: BaidumapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
