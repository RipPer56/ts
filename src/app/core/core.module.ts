import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NavService } from './nav.service';
/**
 * Module responsible for bootstrapping the application. It should be imported only once, only in the AppModule.
 * It can also provide global services (e.g. UserService).
 */
@NgModule({
  imports: [
    SharedModule.forRoot(),
  ],
  declarations: [],
  providers: [
    NavService,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}
