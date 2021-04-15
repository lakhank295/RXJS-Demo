import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { distinct } from 'rxjs/operators';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.scss']
})
export class DistinctComponent implements OnInit {
  
  constructor(private _service: CommonService) { }

  ngOnInit(): void {
    let source = of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1);

    source.pipe(
      distinct()
    ).subscribe(res => {
      this._service.printData(res, 'elContainer')
      console.log(res)
    })
  }

}
