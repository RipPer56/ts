import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AppHeaderComponent } from './components/ba-header/ba-app-header';
import { ItemComplaintComponent } from './components/ba-item-complaint/ba-item-complaint';
import { ItemFolderComponent } from './components/ba-item-folder/ba-item-folder';
import { ItemComponent } from './components/ba-item/ba-item';
import { SideMenuComponent } from './components/ba-side-menu/ba-side-menu';
import { PageEntriesService } from './components/ba-side-menu/page-entries.service';
import { ProgressCircleBarComponent } from './components/progress-circle-bar/progress-circle-bar';
import { AutofocusDirective } from './directives/autofocus';
import { TabIndexDirective } from './directives/tab-index/tab-index.directive';
import { TouchedWorkaroundDirective } from './directives/touched-workaroud';
import { DhPipe } from './pipes/dh';
import { IdPipe } from './pipes/id.pipe';
import { AdherentsDal } from './services/adherents/adherents.dal';
import { AuthService } from './services/auth.service';
import { CacheService } from './services/cache-service';
import { ErrorService } from './services/error.service';
import { ToastService } from './services/toast.service';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NgCircleProgressModule.forRoot(),
  ],
  declarations: [
    AppHeaderComponent,
    ItemComponent,
    ItemComplaintComponent,
    ItemFolderComponent,
    SideMenuComponent,
    ProgressCircleBarComponent,
    TabIndexDirective,
    TouchedWorkaroundDirective,
    AutofocusDirective,
    IdPipe,
    DhPipe,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ItemComponent,
    ItemComplaintComponent,
    ItemFolderComponent,
    SideMenuComponent,
    AppHeaderComponent,
    TabIndexDirective,
    TouchedWorkaroundDirective,
    AutofocusDirective,
    ProgressCircleBarComponent,
    IdPipe,
    DhPipe,
  ],
})

export class SharedModule {
  // Pattern from https://stackoverflow.com/a/39653824/4717408
  static forRoot() {
    // Providers are only declared with forRoot, which is expected to be called only once, in the root or core module.
    return {
      ngModule: SharedModule,
      providers: [
        ErrorService,
        {provide: ErrorHandler, useClass: ErrorService},
        ToastService,
        AdherentsDal,
        PageEntriesService,
        AuthService,
        CacheService,
      ],
    };
  }
}
