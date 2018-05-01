import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppSettingsModule} from '../app-settings.module';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  private apiUrl = AppSettingsModule.API_ENDPOINT + 'country/list';
  private token = AppSettingsModule.API_TOKEN;

  constructor(private http: HttpClient) {
  }

  getCountries() {
    return this.http.get(this.apiUrl, {
      params: {
        token: this.token,
      }
    })
      .toPromise()
      .then(response => {
        console.log(response);
      })
      .catch(console.log);
  }

  ngOnInit() {
    this.getCountries();
  }

}
