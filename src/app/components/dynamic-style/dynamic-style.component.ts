import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-style',
  imports: [],
  templateUrl: './dynamic-style.component.html',
  styleUrl: './dynamic-style.component.css',
})
export class DynamicStyleComponent {
  font: string = '30px';
  color: string = 'red';
  fontbig: string = '60px';
  zoom: boolean = false;

  zoomToggle() {
    this.zoom = !this.zoom;
  }
}
