import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private router: Router){}

  ngOnInit() {
      
  }

  doSearch(vlaue:string){
    console.log(`value= ${vlaue}`);
    this.router.navigateByUrl(`/search/${vlaue}`);
  }
}
