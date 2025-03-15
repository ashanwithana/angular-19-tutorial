import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  imports: [],
  templateUrl: './swtch-case.component.html',
  styleUrl: './swtch-case.component.css',
})
export class SwtchCaseComponent {
  color: string = 'black';

  onhandle(val: string) {
    this.color = val;
  }

  changeColor(event: Event) {
    this.color = (event.target as HTMLInputElement).value;
  }
}
