import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counter: number = 0;

  // handleIncrement() {
  //   this.counter += 1;
  // }
  // handleDecrement() {
  //   this.counter -= 1;
  // }
  // handleReset() {
  //   this.counter = 0;
  // }

  handleCounter(command: string) {
    if (command == 'plus') {
      this.counter += 1;
    } else if (command == 'minus') {
      this.counter -= 1;
    } else {
      this.counter = 0;
    }
  }
}
