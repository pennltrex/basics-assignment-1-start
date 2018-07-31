import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { AlertMessageComponent } from './success-message/alert-message/alert-message.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessMessageComponent,
    AlertMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
