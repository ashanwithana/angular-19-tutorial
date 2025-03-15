import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
})
export class SignalComponent {
  data: number = 100;
  counter = signal(10);

  // test = signal<number | string>(20);
  test:WritableSignal<number | string> = signal(10)

  computed:Signal<number> =computed(()=>20)

  constructor() {
    effect(() => {
      console.log(this.counter());
      // console.log(this.data);
    });
  }

  incrementOnClickProperty(value: string) {
    if (value == 'add') {
      this.data += 1;
    } else {
      this.data - +1;
    }
  }
  incrementOnClickSignal(value: string) {
    if (value == 'add') {
      this.counter.set(this.counter() + 1);
    } else {
      this.counter.set(this.counter() - 1);
    }
  }
  setData(){
    // this.test.set(80)
    this.test.set('test')
  }
}
