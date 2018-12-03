import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() {
  }

  @Input()
  public entries: LinkEntry[] = [];

  public get categories(): { category: string, entries: LinkEntry[] }[] {
    const categories = new Set();
    this.entries.forEach(entry => categories.add(entry.category));
    const z = Array.from(categories).map(category => {
      return { category, entries: this.entries.filter(entry => entry.category === category) };
    });
    return z;
  }


  ngOnInit() {
  }

}

export interface LinkEntry {
  category: string;
  name: string;
  link: string;
}
