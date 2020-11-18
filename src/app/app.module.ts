import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustCompComponent } from './cust-comp/cust-comp.component';
import { StepsApiService } from './services/steps-api.service';

@NgModule({
  declarations: [
    AppComponent,
    CustCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StepsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
