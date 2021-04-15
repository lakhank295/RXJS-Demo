import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { retry, retryWhen, delay, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
  person = null;
  fetching: boolean = false;
  status = 'No Data'
  constructor(private _service: CommonService) { }

  ngOnInit(): void {
   
  }

  fetchData() {
    this.fetching = true
    this.status = 'Fetching Data'
    this._service.getUserData().pipe(
      // retry(3)
      retryWhen(err => err.pipe(
        delay(2000),
        scan((retryCount) => {
          if(retryCount >= 3) {
            throw err
          } else {
            retryCount = retryCount + 1
            this.status = 'Retry Attempt #' + retryCount
            return retryCount
          }
        }, 0)
      ))
    ).subscribe(res => {
      this.person = res
      this.fetching = false
      this.status = 'Data Fetched'
    }, err => {
      this.fetching = false
      this.status = 'Problem Fetching Data'
    })
  }

}
