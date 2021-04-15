import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html', 
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {
  combinedValue: Observable<any>;
  searchField1: FormControl;
  searchField2: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.searchField1 = new FormControl();
    this.searchField2 = new FormControl();

    this.combinedValue = this.searchField1.valueChanges.pipe(
      mergeMap(s1 => this.searchField2.valueChanges.pipe(
            map(s2 => s1 + '' + s2)
          )  
      )
    )
  }
}
