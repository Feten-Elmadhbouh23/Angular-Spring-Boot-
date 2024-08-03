import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    // Your other components
  ],
  imports: [
    BrowserModule,
    CommonModule ,
    HttpClientModule
  ],
  providers: [],
  // No bootstrap array needed for standalone components
})
export class AppModule { }
