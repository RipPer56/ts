import {TabIndexDirective} from './tab-index.directive';

describe('TabIndexDirective', () => {
  it('should create an instance', () => {
    const directive = new TabIndexDirective(<any>{
      focusNext: () => {
      }
    });
    expect(directive).toBeTruthy();
  });
});
