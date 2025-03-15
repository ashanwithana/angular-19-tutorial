import { Component } from '@angular/core';

@Component({
  selector: 'app-loop',
  imports: [],
  templateUrl: './loop.component.html',
  styleUrl: './loop.component.css'
})
export class LoopComponent {
names: any = ['nimal', 'kamal','wimal','bimal','himal','limal'];

students: any =[
  {name: 'ashan', age: 26, email:'ashan@test.com'},
  {name: 'bishan', age: 26, email:'bishan@test.com'},
  {name: 'tishan', age: 26, email:'tishan@test.com'},
  {name: 'kishan', age: 26, email:'kishan@test.com'},
]
}
