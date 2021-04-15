import { Component, OnInit } from '@angular/core';
import { Subscription, interval, from } from 'rxjs';
import { toArray, take } from 'rxjs/operators';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
  subscription: Subscription;
  subscription2: Subscription;

  users = [
    { name: 'Lakhan', role: 'Admin' },
    { name: 'Vijay', role: 'Admin' },
    { name: 'Nitin', role: 'Admin' },
    { name: 'Abhi', role: 'Admin' },
  ]

  intervalData;
  userData
  constructor(private _service: CommonService) { }

  ngOnInit(): void {
    //Ex 01
    let source = interval(1000);

    this.subscription = source.pipe(
      take(5),
      toArray()
    ).subscribe(res => {
      this.intervalData = res
    })

    // Ex 02
    const source2 = from(this.users)

    this.subscription2 = source2.pipe(
      toArray()
    )
    .subscribe(res => {
      this.userData = res;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
