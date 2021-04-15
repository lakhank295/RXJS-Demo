import { Component, OnInit } from '@angular/core';
import { timer, combineLatest, Subscription } from 'rxjs';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {
  subscription: Subscription;

  constructor(private _service: CommonService) { }

  ngOnInit(): void {
    const source = timer(1000, 4000)
    const source2 = timer(2000, 4000)

    this.subscription = combineLatest(source, source2).subscribe(res => {
      this._service.printData(res, 'elContainer')
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
