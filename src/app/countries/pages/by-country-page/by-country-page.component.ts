import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  public country: Country[] = [];
  public initialValue: string = '';

  constructor( private countriesService : CountriesService){}

  ngOnInit(): void {
    this.country = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountry( term: string ){
    this.countriesService.searchCountry(term)
      .subscribe( resp => this.country = resp);
  }
}
