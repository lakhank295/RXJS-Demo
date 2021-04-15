import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.scss']
})
export class StartWithComponent implements OnInit {

  constructor(private _service: CommonService) { }

  ngOnInit(): void {
    let source = of(1,2,3,4,5)

    source.pipe(
      startWith(0)
    ).subscribe(res => {
      this._service.printData(res, 'elContainer')
    })
  }

}
