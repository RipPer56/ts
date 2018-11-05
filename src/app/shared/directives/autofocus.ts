import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
import {TextInput} from 'ionic-angular';

@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective implements AfterViewInit {
  constructor(private el: ElementRef, private inputRef: TextInput) {
  }

  private _autofocus: boolean;

  @Input() set autofocus(condition: boolean) {
    this._autofocus = condition !== false;
  }

  ngAfterViewInit() {
    if (this._autofocus || this._autofocus == null) {
      setTimeout(() => {
        this.inputRef.setFocus();
        this.el.nativeElement.focus();      //For SSR (server side rendering) this is not safe. Use: https://github.com/angular/angular/issues/15008#issuecomment-285141070)
      }, 150);
    }
  }
}
