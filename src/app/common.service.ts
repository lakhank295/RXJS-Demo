import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, ReplaySubject, AsyncSubject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  exclusive = new Subject<boolean>()

  username = new Subject<string>();

  videoEmit = new ReplaySubject<string>(5, 5000);

  asyncSub = new AsyncSubject()

  behaveSub = new BehaviorSubject<string>('Lakhan')

  constructor(private http: HttpClient) { }

  printData(res, elm) {
    let el = document.createElement('li')

    el.innerText = res
    document.getElementById(elm).appendChild(el)
  }

  getUserData () {
    return this.http.get('https://global-1bb0f.firebaseio.com/user.json')
  }
}
