import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  constructor(private route: ActivatedRoute) {}

  name: string | null = '';

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.name =params['name'];
    })

    let user = this.route.snapshot.paramMap.get('name');
    this.name = user;

    this.route.queryParams.subscribe((params) => {
      this.name = params['name'];
    });

    this.route.data.subscribe((params) => {
      this.name = params['name']
    });
  }

  handleEvent() {
    alert('this is trigger by the event');
  }
}
