import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LinechartComponent } from './linechart/linechart.component';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';
import { KendogridComponent } from './kendogrid/kendogrid.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar/calendar.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridallComponent } from './gridall/gridall.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainMenuComponent,
    LinechartComponent,
    ScatterplotComponent,
    KendogridComponent,
    TreeviewComponent,
    MultiselectComponent,
    CalendarComponent,
    GridallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    GridModule,
    InputsModule,
    TreeViewModule,
    DropDownsModule,
    FormsModule,
    DateInputsModule,
    HttpClientModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
