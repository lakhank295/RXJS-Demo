import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  @ViewChild('input1') input1: ElementRef;
  userName;

  constructor(private _service: CommonService) { 
    
  }

  ngOnInit(): void {
    this._service.username.subscribe(res => {
      this.userName = res
    })
  }

  changeUsername() {
    this._service.username.next(this.input1.nativeElement.value)
  }


}
