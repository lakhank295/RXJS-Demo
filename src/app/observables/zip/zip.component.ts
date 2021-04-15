import { Component, OnInit } from '@angular/core';
import { zip, of } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent implements OnInit {
  data;

  constructor() { }

  ngOnInit(): void {
    let age = of<number>(27, 25, 29);
    let name = of<string>('Foo', 'Bar', 'Beer');
    let role = of<string>('Dev', 'Dr', 'Dev');

    zip(age, name, role).pipe(
      map(([age, name, role]) => ({age, name, role})),
      toArray()
    ).subscribe(res => {
      this.data = res
    })
  }

}
