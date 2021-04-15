import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {
  userName;

  constructor(private _service: CommonService) { }

  ngOnInit(): void {
    this._service.exclusive.next(true)
    this._service.username.subscribe(res => {
      this.userName = res
    })
  }

  ngOnDestroy() {
    this._service.exclusive.next(false)
  }
}
