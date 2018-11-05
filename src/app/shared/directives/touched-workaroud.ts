import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

//input ng-touched not reflected properly for list-item
//https://github.com/ionic-team/ionic/issues/13078
@Directive({
  selector: '[touched-workaround]',
  host: {
    '(ionBlur)': 'onBlur()'
  }
})
export class TouchedWorkaroundDirective implements OnInit {

  private parent: any;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.parent = this.element.nativeElement.parentElement.parentElement.parentElement;
  }

  onBlur() {
    this.renderer.addClass(this.parent, 'ng-touched');
    this.renderer.removeClass(this.parent, 'ng-untouched');
  }

}
