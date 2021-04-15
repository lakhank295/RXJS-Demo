import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
  status;
  constructor() { }

  ngOnInit(): void {

    let buylaptop = new Promise((resolve, reject) => {
      if(this.isDellAvailable()) {
        resolve('Dell is available...')
      } else if(this.isHpAvailable()) {
        resolve('HP is available...')
      } else {
        reject('Out Of Stock...')
      }
    })

    buylaptop.then(res => {
      this.status = res
    }).catch(err => {
      this.status = err
    })
  }

  isDellAvailable() {
    return true
  }

  isHpAvailable() {
    return false;
  }


}
