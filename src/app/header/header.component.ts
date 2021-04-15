import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  exclusive: boolean = false;

  constructor(private _service: CommonService) { }

  ngOnInit() {
    this._service.exclusive.subscribe(res => {       
      this.exclusive = res
    })

  }

}
