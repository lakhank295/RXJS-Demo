import { Component, OnInit, AfterViewInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-throttle-time',
  templateUrl: './throttle-time.component.html',
  styleUrls: ['./throttle-time.component.scss']
})
export class ThrottleTimeComponent implements OnInit, AfterViewInit {
  subscription: Subscription;

  constructor(private _service: CommonService) { }

  ngOnInit(): void {
    
  }
  
  ngAfterViewInit() {
    const broadcastVideo = interval(1000);

    this.subscription = broadcastVideo.pipe(
      throttleTime(3000)
    )
    .subscribe(res => {
      this._service.printData('Video ' + res, 'elContainer')
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
