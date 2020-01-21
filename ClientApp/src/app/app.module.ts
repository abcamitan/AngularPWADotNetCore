import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GeolocationService } from './geolocation.service'
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
         MatToolbarModule, MatCardModule, MatSlideToggleModule } from "@angular/material";

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,  
    MatButtonModule, 
    MatIconModule, 
    MatInputModule, 
    MatSelectModule, 
    MatSliderModule,
    MatToolbarModule, 
    MatCardModule, 
    MatSlideToggleModule,
    RouterModule.forRoot([
      //{ path: '', component: HomeComponent, pathMatch: 'full' },
    ])
  ],
  providers: [GeolocationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
