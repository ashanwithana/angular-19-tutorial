import { Component } from '@angular/core';
import { CounterComponent } from "./components/counter/counter.component";
import { FormComponent } from "./components/form/form.component";
import { ControlFlowComponent } from "./components/control-flow/control-flow.component";
import { SwtchCaseComponent } from "./components/swtch-case/swtch-case.component";
import { LoopComponent } from "./components/loop/loop.component";

@Component({
  selector: 'app-root',
  imports: [CounterComponent, FormComponent, ControlFlowComponent, SwtchCaseComponent, LoopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-19-tutorial';
}
