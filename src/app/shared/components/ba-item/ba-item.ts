import { Component, Input } from '@angular/core';

@Component({
  selector: 'ba-item',
  templateUrl: 'ba-item.html'
})
export class ItemComponent {
  @Input() itemTitle: string;
  @Input() bulletColor: string;

  constructor() {
  }

}
