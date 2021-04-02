import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Added on 1-4-21 for connecting with express server
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
