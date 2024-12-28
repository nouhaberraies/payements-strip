import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Importer FormsModule pour utiliser ngModel

import { AppComponent } from './app.component';
import { PayementComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    PayementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Ajoutez FormsModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
