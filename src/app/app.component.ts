import { Component } from '@angular/core';
import { title } from './modulo1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = title;
}
