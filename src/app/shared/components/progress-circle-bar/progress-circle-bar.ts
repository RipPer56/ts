import { Component, Input } from '@angular/core';

@Component({
  selector: 'ba-progress-circle-bar',
  templateUrl: 'progress-circle-bar.html'
})
export class ProgressCircleBarComponent {
  @Input() progress: number;
  @Input() total: number;
}
