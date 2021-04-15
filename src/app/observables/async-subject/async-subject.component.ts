import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {
  @ViewChild('video1') video1: ElementRef;

  videoEmit;

  constructor(private _service: CommonService) { }

  ngOnInit(): void {
   this._service.asyncSub.subscribe(res => {
     this.videoEmit = res;
   })
  }

  addVideo() {
    let video = this.video1.nativeElement.value
    this._service.asyncSub.next(video)
    this.video1.nativeElement.value = ''
  }

  onComplete(){
    this._service.asyncSub.complete()
  }
}