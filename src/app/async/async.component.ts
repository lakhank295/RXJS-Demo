import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss']
})
export class AsyncComponent implements OnInit {
  status;
  constructor() { }

  ngOnInit(): void {
    this.asyncMethod();
  }

  waitForOneSecond() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("After Three Seconds");
      }, 3000);
    });
  }

  async asyncMethod() {
    this.status = await this.waitForOneSecond();
  }

}
