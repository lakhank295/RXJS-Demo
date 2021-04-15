import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  subscription: Subscription;

  constructor(private _service: CommonService) { }

  ngOnInit(): void {
    // const broadcastVideo = interval(1000)

    const broadcastVideo = timer(3000, 1000)

    this.subscription = broadcastVideo.subscribe(res => {
      this._service.printData('Video ' + res, 'elContainer1')

      if(res > 5) {
        this.subscription.unsubscribe();
      }
    })

  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
