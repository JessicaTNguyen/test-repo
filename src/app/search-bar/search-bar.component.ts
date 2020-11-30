import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public pokemonName: string = "";

  constructor(private http: HttpClient, private searchService: SearchService) { }

  ngOnInit(): void {
  }

  // Fetch pokemon info
  searchPokemon(): void {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`)
    .subscribe(response => this.searchService.addInfo(response)); 
  }


}
