import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-custom-observables',
  templateUrl: './custom-observables.component.html',
  styleUrls: ['./custom-observables.component.scss']
})
export class CustomObservablesComponent implements OnInit {
  techStatus;techStatus2;nameStatus;
  randName;

  subscription: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  
  constructor(private _service: CommonService) { }

  ngOnInit(): void {

    //Ex -01 (Manual)
    const custObs1 = Observable.create(observer => {
      setTimeout(() => {
        observer.next('Angular')
      }, 1000);   
      
      setTimeout(() => {
        observer.next('JS')
      }, 2000);   

      setTimeout(() => {
        observer.next('RxjS')
        // observer.error(new Error('Limit Exceed'))
      }, 3000);   

      setTimeout(() => {
        observer.next('HTML,CSS')
      }, 4000);   
      
      setTimeout(() => {
        observer.next('Jquery')
        observer.complete()
      }, 4000);   
    })

    this.subscription = custObs1.subscribe(res => {
      this._service.printData(res, 'elContainer1')
    }, (err) => {
      this.techStatus = 'error'
    }, () => {
      this.techStatus = 'completed'
    })


    //Ex 02
    const arr = ['Angular', 'Typescript', 'Vue', 'Node', 'Jquery']
    const custObs2 = Observable.create(observer => {
      let count = 0
      setInterval(() => {
        observer.next(arr[count])
        
        if(count >= 4) {
          observer.complete()
        }

        count++
      }, 1000)
    })

    this.subscription2 = custObs2.subscribe(res => {
      this._service.printData(res, 'elContainer2')
    }, (err) => {
      this.techStatus2 = 'error'
    }, () => {
      this.techStatus2 = 'completed'
    })

    // Ex - 03 | Random Names
    const arr2 = ['Lakhan', 'Deepak', 'Khandelwal', 'Kishan', 'Kalyani']
    const custObs3 = Observable.create(observer => {
      let count = 0
      setInterval(() => {
        observer.next(arr2[count])
        
        if(count >= 4) {
          observer.complete()
        }

        count++
      }, 1000)
    }) 

    this.subscription3 = custObs3.subscribe(res => {
      this.randName = res
    },(err) => {
      this.nameStatus = 'error'
    }, () => {
      this.nameStatus = 'completed'
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }

}
