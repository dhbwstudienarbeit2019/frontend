import { Component } from '@angular/core';
import { LinkEntry } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  entries: LinkEntry[] = [
    {
      name: 'Cat Swarm Optimization',
      category: 'Popular Functions',
      link: ''
    },
    {
      name: 'Dog Swarm Optimization',
      category: 'Other Functions',
      link: ''
    }

  ];
}
