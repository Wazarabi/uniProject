import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm = '';
  constructor(activatedRoute:ActivatedRoute, private router:Router) {
    activatedRoute.params.subscribe(params => {
      if(params.searchTerm) this.searchTerm = params.searchTerm;
    });
  }

  search(term:string):void{
    if(term)
    this.router.navigateByUrl('/search/'+term);
  }

  // minimal solution :
  // add [ngStyle]="{margin-top:marginTop, ...}"
  @Input()
  marginTop? = '3rem';
  @Input()
  marginBottom? = '1.5rem';
  @Input()
  height? = '3rem';
  @Input()
  inputWidth? = '20rem';
  @Input()
  buttonWidth? = '5rem';

}
