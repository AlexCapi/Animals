import { Injectable } from '@angular/core';
import {AppSettingsModule} from '../app-settings.module';
import { Observable } from 'rxjs/Observable';
import {Country} from '../country';
import {Countries} from '../countries';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable()
export class CountriesService {

  private apiUrl = AppSettingsModule.API_ENDPOINT + 'country/list';
  private token = AppSettingsModule.API_TOKEN;
  constructor(private http: HttpClient) {

  }

  getCountries(): Observable<Countries> {
    return this.http.get<Countries>(this.apiUrl, {
      params: {
        token: this.token,
      }
    });
  }

}
