import {
  NgFor,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, RouterLink],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  show: boolean = false;

  whenToggle() {
    this.show = !this.show;
  }

  students = ['ashan', 'bishan', 'teshan', 'kushan', 'oshan'];

  teachers: any = [
    { name: 'ashan', id: 1, age: 26, email: 'ashan@test.com' },
    { name: 'bishan', id: 2, age: 26, email: 'bishan@test.com' },
    { name: 'tishan', id: 3, age: 26, email: 'tishan@test.com' },
    { name: 'kishan', id: 4, age: 26, email: 'kishan@test.com' },
  ];

  login = false;

  loginToggle() {
    this.login = !this.login;
  }

  color = 'purple';
}
