import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { AppSettingsModule } from './/app-settings.module';
import { CountriesComponent } from './countries/countries.component';
import {CountriesService} from './services/countries.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppSettingsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent, NavigationComponent, FooterComponent]
})
export class AppModule { }
