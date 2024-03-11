import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DavlaebaN1Component } from './davlaeba-n1/davlaeba-n1.component';
import { DavlaebaN2Component } from './davlaeba-n2/davlaeba-n2.component';
import { DavlaebaN3Component } from './davlaeba-n3/davlaeba-n3.component';
import { DavlaebaN4Component } from './davlaeba-n4/davlaeba-n4.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DavlaebaN1Component,
    DavlaebaN2Component,
    DavlaebaN3Component,
    DavlaebaN4Component,
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