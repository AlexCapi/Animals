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
  public selectedCountry: String = 'FR';
  countries: Country[];
  species: Species[];
  public nameAsc: boolean;
  public nameDesc: boolean;

  constructor(private countriesService: CountriesService, private speciesService: SpeciesService) {
  }

  ngOnInit() {
    this.getCountries();
    this.nameAsc = false;
    this.nameDesc = true;
  }

  getCountries(): void {
    this.countriesService.getCountries().subscribe(countries => {
      this.countries = countries.results;
    });
  }

  change(newCountry): void {
    this.speciesLoader.toggleVisibility();
    this.speciesService.getSpeciesByCountry(newCountry).subscribe(species => {
      console.log('species', species);
      this.species = species.result;
      this.speciesLoader.toggleVisibility();
    });
  }

  sortSpecies(): void {
    if (this.nameAsc) {
      this.nameAsc = false;
      this.nameDesc = true;
      this.species = this.species.sort(function(a, b) {
        let textA, textB;
        textA = a.scientific_name.toUpperCase();
        textB = b.scientific_name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
    } else {
      this.nameAsc = true;
      this.nameDesc = false;
      this.species = this.species.sort(function(a, b) {
        let textA, textB;
        textA = a.scientific_name.toUpperCase();
        textB = b.scientific_name.toUpperCase();
        return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
      });
    }
  }

}
