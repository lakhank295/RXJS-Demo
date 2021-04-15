import { Component, OnInit } from '@angular/core';
import { from, of, Subscription } from 'rxjs';
import { delay, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {

  data; 
  subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    const oneSecondSource = of('1 second http request').pipe(delay(2000))
    const twoSecondSource = of('2 second http request').pipe(delay(3000))
    const threeSecondSource = of('3 second http request').pipe(delay(1000))

    const map = from([
      threeSecondSource, 
      oneSecondSource, 
      twoSecondSource,
    ])

    this.subscription = map.pipe(
      concatMap(x => x)
    )
    .subscribe(res => { 
      this.data = res
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
