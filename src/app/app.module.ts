import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FershWorksComponent } from './fersh-works/fersh-works.component';
import { FershWorksHomeComponent } from './fersh-works-home/fersh-works-home.component';
;


@NgModule({
  declarations: [
    AppComponent,
    FershWorksComponent,
    FershWorksHomeComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
