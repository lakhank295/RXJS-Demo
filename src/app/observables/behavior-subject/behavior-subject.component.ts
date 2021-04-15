import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit {
  value;
  subscription: Subscription;

  @ViewChild('input1') input: ElementRef;

  constructor(private _service: CommonService) { }

  ngOnInit(): void {
    this.subscription = this._service.behaveSub.subscribe(res => {
      this.value = res
    })
  }

  changeUsername() {
    this._service.behaveSub.next(this.input.nativeElement.value)
    this.input.nativeElement.value = ''
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
