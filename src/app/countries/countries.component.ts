import {Component, OnInit} from '@angular/core';
import {CountriesService} from '../services/countries.service';
import {SpeciesService} from '../services/species.service';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';

import {Country} from '../country';
import {Countries} from '../countries';
import {Species} from '../species';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  public selectedCountry;
  countries: Country[];
  species: Species[];

  constructor(private countriesService: CountriesService, private speciesService: SpeciesService) {
  }

  getCountries(): void {
    this.countriesService.getCountries().subscribe(countries => {
      this.countries = countries.results;
    });
  }

  change(newCountry): void {
    this.speciesService.getSpeciesByCountry(newCountry).subscribe(species => {
      this.species = species;
      console.log('species', this.species);
    });
  }

  ngOnInit() {
    this.getCountries();
  }

}
