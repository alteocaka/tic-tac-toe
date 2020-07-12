import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing:
import { AppRoutingModule } from './app-routing.module';

// Components:
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { FieldComponent } from './field/field.component';

// Angular material:
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
