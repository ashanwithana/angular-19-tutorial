import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
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
    { name: 'ashan', age: 26, email: 'ashan@test.com' },
    { name: 'bishan', age: 26, email: 'bishan@test.com' },
    { name: 'tishan', age: 26, email: 'tishan@test.com' },
    { name: 'kishan', age: 26, email: 'kishan@test.com' },
  ];

  login = false;

  loginToggle() {
    this.login = !this.login;
  }

  color = 'purple';
}
