import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainMenuComponent} from './main-menu/main-menu.component';
import { LinechartComponent } from './linechart/linechart.component';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';
import { GridComponent } from '@progress/kendo-angular-grid';
import { KendogridComponent } from './kendogrid/kendogrid.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GridallComponent } from './gridall/gridall.component';



const routes: Routes = [
  {path: '', component: MainMenuComponent},
  {path: 'lines', component: LinechartComponent},
  {path: 'scatterplots', component: ScatterplotComponent},
  // {path: 'grid', component:KendogridComponent},
  {path: 'grid', component:GridallComponent},
  {path: 'treeview', component:TreeviewComponent},
  {path: 'multiselect', component:MultiselectComponent},
  {path: 'calendar', component:CalendarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
