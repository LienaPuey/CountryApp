import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public country: Country[] = [];

  constructor( private countriesService : CountriesService){}

  searchByCountry( term: string ){
    this.countriesService.searchCountry(term)
      .subscribe( resp => this.country = resp);
  }
}
