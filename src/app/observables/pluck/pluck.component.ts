import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {
  data1; data2;
  constructor() { }
  users = [
    {
      name: 'Lakhan',
      skills: 'Angular',
      job: {
        title: 'FrontEnd Developer'
      }
    },
    {
      name: 'Nayan',
      skills: 'JS',
      job: {
        title: 'FrontEnd Developer'
      }
    },
    {
      name: 'Vijay',
      skills: 'Python',
      job: {
        title: 'Python Developer'
      }
    }
  ]

  ngOnInit(): void {
    const data = from(this.users)

    data.pipe(
      pluck('name'),
      toArray()
    ).subscribe(res => {
      this.data1 = res
    })


    data.pipe(
      pluck('job', 'title'),
      toArray()
    ).subscribe(res => {
      this.data2 = res
    })
  }

}
