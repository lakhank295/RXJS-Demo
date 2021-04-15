import { Component, OnInit } from '@angular/core';

import { merge, of } from 'rxjs';
import { toArray } from 'rxjs/operators';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {
  mergedData; 
  constructor() { }

  ngOnInit(): void {
    let source1 = of(1, 2, 3, 4)
    let source2 = of(5,6,7,8)

    let data = merge(source1, source2)

    data.pipe(
      toArray()
    ).subscribe(res => {
      this.mergedData = res
    })
  }

}
