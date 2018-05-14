import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import { AfterViewInit, ViewChild } from '@angular/core';

import {CountriesService} from '../services/countries.service';
import {SpeciesService} from '../services/species.service';

import {Country} from '../country';
import {Species} from '../species';

import {LoaderComponent} from '../loader/loader.component';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  @ViewChild(LoaderComponent)
  private speciesLoader: LoaderComponent;
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
    this.speciesLoader.toggleVisibility();
    this.speciesService.getSpeciesByCountry(newCountry).subscribe(species => {
      this.species = species;
      this.speciesLoader.toggleVisibility();
      console.log('species', this.species);
    });
  }

  ngOnInit() {
    this.getCountries();
  }

}
