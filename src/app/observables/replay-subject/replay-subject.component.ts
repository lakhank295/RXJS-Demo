import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {
  @ViewChild('video1') video1: ElementRef;

  user1List = [
    'Angular',
    'Typescript'
  ];

  user2List = [];

  user3List = [];

  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;

  subscription2: Subscription;
  subscription3: Subscription;
  subscription4: Subscription;

  methodInterval: boolean = false;

  constructor(private _service: CommonService) { }

  ngOnInit(): void {
    this._service.videoEmit.subscribe(res => {
      this.user1List.push(res);
    })
  }

  addVideo() {
    let video = this.video1.nativeElement.value
    this._service.videoEmit.next(video)
    this.video1.nativeElement.value = ''
  }

  user2Subscribe() {
    if(this.subscribeMode2) {
      this.subscription2.unsubscribe()
    } else {
      this.subscription2 = this._service.videoEmit.subscribe(res => {
        this.user2List.push(res)
      })
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }

  user3Subscribe() {
    if(this.subscribeMode3) {
      this.subscription3.unsubscribe()
    } else {
      this.subscription3 = this._service.videoEmit.subscribe(res => {
        this.user3List.push(res)
      })
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }

  toggleMethod() {
    const broadcastVideo = interval(1000)

    if(!this.methodInterval) {
      this.subscription4 = broadcastVideo.subscribe(res => {
        this._service.videoEmit.next('Video ' + res)
      })
    } else {
      this.subscription4.unsubscribe();
    }
    
    this.methodInterval = !this.methodInterval
  }

  ngOnDestroy() {
    if(this.subscription2 != undefined) {
      this.subscription2.unsubscribe();
    }
    
    if(this.subscription3 != undefined) {
      this.subscription3.unsubscribe();
    } 
    
    if(this.subscription4 != undefined) {
      this.subscription4.unsubscribe();
    } 
  }
}
