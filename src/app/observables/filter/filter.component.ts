import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  data1; data2; data3;

  memberData = [
    { id: 1, name: 'Lakhan', gender: 'Male' },
    { id: 2, name: 'Kishan', gender: 'Male' },
    { id: 3, name: 'Abhijeet', gender: 'Male' },
    { id: 4, name: 'Nitin', gender: 'Male' },
    { id: 5, name: 'Sundar', gender: 'Male' },
    { id: 6, name: 'Shital', gender: 'Female' },
    { id: 7, name: 'Supriya', gender: 'Female' },
    { id: 8, name: 'Sneha', gender: 'Female' },
    { id: 9, name: 'Kalyani', gender: 'Female' },
    { id: 10, name: 'Raj', gender: 'Male' }
  ]
  constructor() { }

  ngOnInit(): void {

    let data = from(this.memberData)

    //Ex 01 | by length
    data.pipe(
      filter(filterData => filterData.name.length <= 5),
      toArray()
    ).subscribe(res => {
      this.data1 = res
    })

    //Ex 02 | by gender
    data.pipe(
      filter(filterData => filterData.gender == 'Male'),
      toArray()
    ).subscribe(res => {
      this.data2 = res
    })

     //Ex 03 | by nth item
     data.pipe(
      filter(filterData => filterData.id <= 5),
      toArray()
    ).subscribe(res => {
      this.data3 = res
    })
  }

}
