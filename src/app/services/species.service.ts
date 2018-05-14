import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {AppSettingsModule} from '../app-settings.module';
import {SpeciesList} from '../speciesList';

@Injectable()
export class SpeciesService {

  // private apiUrl = AppSettingsModule.API_ENDPOINT + 'country/list';
  private token = AppSettingsModule.API_TOKEN;
  constructor(private http: HttpClient) {

  }

  getSpeciesByCountry(countryCode: string): Observable<SpeciesList> {
    return this.http.get<Species>(AppSettingsModule.API_ENDPOINT + 'country/getspecies/' + countryCode, {
      params: {
        token: this.token,
      }
    });
  }

}
