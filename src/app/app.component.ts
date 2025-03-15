import { Component } from '@angular/core';
import { CounterComponent } from "./components/counter/counter.component";
import { FormComponent } from "./components/form/form.component";

@Component({
  selector: 'app-root',
  imports: [CounterComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-19-tutorial';
}
