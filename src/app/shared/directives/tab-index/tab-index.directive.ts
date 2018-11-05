import {Directive, HostListener} from '@angular/core';
import {TextInput} from 'ionic-angular';

@Directive({
  selector: '[tiTabIndex]'
})
export class TabIndexDirective {

  constructor(private inputRef: TextInput) {
  }

  @HostListener('keydown', ['$event']) onInputChange(e: KeyboardEvent) {
    const code = e.keyCode || e.which;

    if (code === 13) {
      e.preventDefault();
      try {
        this.inputRef.focusNext();
      } catch (err) {
        console.log('No next element to focus, skipping.');
        this.inputRef.setBlur();
      }
    }
  }

}
