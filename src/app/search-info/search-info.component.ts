import { HttpClient } from '@angular/common/http';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-info',
  templateUrl: './search-info.component.html',
  styleUrls: ['./search-info.component.css']
})
export class SearchInfoComponent implements OnInit {

  public pokeInfo: any;
  public pokeTabs: string[] = ["Ability", "Moves", "Forms"];
  public pokeTab: string[] = ["Ability"];
  public abilityArr: any = [];
  public moves: string = "";
  public forms: string = "";
  public count: number = 0;

  constructor(private http: HttpClient, public searchService: SearchService) {
  }

  ngOnInit(): void {
  }

  getInfo(tab : string): void{
    this.pokeInfo = this.searchService.info;
    if(this.count <= 0){
      this.count = 1;
    switch(tab){
      case "Ability": 
        let arr = this.pokeInfo['abilities'];
        for(let i = 0; i < arr.length; i++){
          let url = arr[i].ability.url;
          let urlObj: string = "";
          this.http.get(url)
          .subscribe(response => urlObj = this.addDesc(response));
          
          console.log(urlObj);
          let obj = [
            {'name': arr[i].ability.name},
            {'desc': "hi"}
          ];
         
          this.abilityArr.push(obj);
        }
        break;
      case "Moves":
        break;
      case "Forms":
        break;
    }

    }
    
  }

  addDesc(response : any): any {
    return response;
  }

}
