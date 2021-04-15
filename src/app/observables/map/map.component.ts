import { Component, OnInit } from '@angular/core';
import { interval, Subscription, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  subscription: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;

  msg1; msg2; msg3
  constructor(private _service: CommonService) { }

  ngOnInit(): void {

    const broadCastVideo = interval(1000)

    // Ex - o1
    this.subscription = broadCastVideo.pipe(
      map(mapData => 'Video ' + mapData)
    ).subscribe(res => {
      this.msg1 = res
    })

    //Ex - 02
    this.subscription2 = broadCastVideo.pipe(
      map(mapData => mapData * 10)
    ).subscribe(res => {
      this.msg2 = res;
    })

    //Ex - 03
    const memberData = [
      { id: 1, name: 'LK' },
      { id: 2, name: 'KK' },
      { id: 3, name: 'DK' },
      { id: 4, name: 'VK' },
      { id: 5, name: 'NS' },
      { id: 6, name: 'AP' },
      { id: 7, name: 'SN' },
      { id: 8, name: 'AW' },
      { id: 9, name: 'SS' },
      { id: 10, name: 'PA' }
    ]

    let memObs = from(memberData)


    this.subscription3 = memObs.pipe(
      map(mapData => mapData.name)
    ).subscribe(res => {
      this._service.printData(res, 'elContainer3')
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }

}
