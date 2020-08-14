import { DemoComponent } from './Components/demo/demo.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoComponent } from './Components/auto/auto.component';
import { AutosComponent } from './Components/autos/autos.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    AutoComponent,
    AutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
