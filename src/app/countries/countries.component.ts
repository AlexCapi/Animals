import {Component, OnInit} from '@angular/core';
import {CountriesService} from '../services/countries.service';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';

import {Country} from '../country';
import {Countries} from '../countries';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  public selectedCountry;
  countries: Country[];

  constructor(private countriesService: CountriesService) {
  }

  getCountries(): void {
    this.countriesService.getCountries().subscribe(countries => {
      this.countries = countries.results;
    });
  }

  ngOnInit() {
    this.getCountries();
  }

}
