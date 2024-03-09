import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DavalebaN1Component } from './davaleba-n1/davaleba-n1.component';
import { DavalebaN2Component } from './davaleba-n2/davaleba-n2.component';
import { ChildN1Component } from './davaleba-n1/child-n1/child-n1.component';
import { ChildN2Component } from './davaleba-n2/child-n2/child-n2.component';

@NgModule({
  declarations: [
    AppComponent,
    DavalebaN1Component,
    DavalebaN2Component,
    ChildN1Component,
    ChildN2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
