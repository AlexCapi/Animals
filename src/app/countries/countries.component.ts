import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettingsModule } from '../app-settings.module';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  private apiUrl = AppSettingsModule.API_ENDPOINT;
  private token = AppSettingsModule.API_TOKEN;
  constructor(private http: HttpClient) {}

  getCountries () {
    return this.http.get(this.apiUrl, {token: this.token});
  }

  ngOnInit() {
    this.getCountries();
  }

}
