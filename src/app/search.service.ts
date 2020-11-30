import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public info : string = "";
  public submitted = false;

  constructor() { }

  addInfo(info : any): void {
    this.info = info;
    this.submitted = true;
  }

}
