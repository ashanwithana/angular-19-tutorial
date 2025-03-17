import { Component } from '@angular/core';
import { CounterComponent } from "./components/counter/counter.component";
import { FormComponent } from "./components/form/form.component";
import { ControlFlowComponent } from "./components/control-flow/control-flow.component";
import { SwtchCaseComponent } from "./components/swtch-case/swtch-case.component";
import { LoopComponent } from "./components/loop/loop.component";
import { EventsComponent } from "./components/events/events.component";
import { SignalComponent } from "./components/signal/signal.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";
import { ToDoListComponent } from "./components/to-do-list/to-do-list.component";
import { DynamicStyleComponent } from "./components/dynamic-style/dynamic-style.component";

@Component({
  selector: 'app-root',
  imports: [CounterComponent, FormComponent, ControlFlowComponent, SwtchCaseComponent, LoopComponent, EventsComponent, SignalComponent, TwoWayBindingComponent, ToDoListComponent, DynamicStyleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-19-tutorial';
}
