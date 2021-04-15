import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  subscription: Subscription;
  subscription2: Subscription;
  color;
  constructor(private _service: CommonService) { }

  ngOnInit(): void {

    const source = interval(1000);

    // Ex 01
    let arr = ["lakhan", "Vijay", "Nitin", "Akash"]

    this.subscription = source.pipe(
      tap(tapData => {
        if(tapData == 4) {
          this.subscription.unsubscribe();
        }
      }),
      map(data => arr[data])
    )
    .subscribe(res => {
      this._service.printData(res, 'elContainer')
    })

    //Ex 02
    let colorArr = ["Red", "Green", "Blue", "Purple"]

    this.subscription2 = source.pipe(
      tap(tapData => {
        this.color = colorArr[tapData];
        if(tapData == 4) {
          this.subscription2.unsubscribe();
        }
      }),
      map(data => colorArr[data])
    )
    .subscribe(res => {
      this._service.printData(res, 'elContainer2')
    })

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
