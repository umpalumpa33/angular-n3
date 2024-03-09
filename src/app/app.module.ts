import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DavalebaN1Component } from './davaleba-n1/davaleba-n1.component';
import { DavalebaN2Component } from './davaleba-n2/davaleba-n2.component';
import { ChildN1Component } from './davaleba-n1/child-n1/child-n1.component';
import { Child1Component } from './davaleba-n2/child1/child1.component';
import { Child2Component } from './davaleba-n2/child2/child2.component';
import { Child3Component } from './davaleba-n2/child3/child3.component';

@NgModule({
  declarations: [
    AppComponent,
    DavalebaN1Component,
    DavalebaN2Component,
    ChildN1Component,
    Child1Component,
    Child2Component,
    Child3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }