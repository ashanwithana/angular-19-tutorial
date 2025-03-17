import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-routing',
  imports: [RouterLink],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.css',
})
export class RoutingComponent {
  constructor(private router: Router) {}

  teachers: any = [
    { name: 'ashan', id: 1, age: 26, email: 'ashan@test.com' },
    { name: 'bishan', id: 2, age: 26, email: 'bishan@test.com' },
    { name: 'tishan', id: 3, age: 26, email: 'tishan@test.com' },
    { name: 'kishan', id: 4, age: 26, email: 'kishan@test.com' },
  ];

  goUser() {
    this.router.navigate(['user'], { queryParams: { name: 'ashan' } });
  }
}
