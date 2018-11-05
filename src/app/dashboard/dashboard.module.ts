import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplaintsModule } from '../complaints/complaint.module';
import { FoldersModule } from '../folders/folders.module';
import { StatsDal } from '../shared/services/stats/stats.dal';
import { SharedModule } from '../shared/shared.module';
import { DashboardPage } from './dashboard';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details';
import { HorizontalMenuComponent } from './dashboard-horizontal-menu/horizontal-menu';
import { HorizontalMenuService } from './dashboard-horizontal-menu/horizontal-menu.service';
import { DashboardSectionComponent } from './dashboard-section/dashboard-section';

@NgModule({
  declarations: [
    DashboardPage,
    HorizontalMenuComponent,
    DashboardDetailsComponent,
    DashboardSectionComponent,
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
    SharedModule,
    FoldersModule,
    ComplaintsModule,
  ],
  providers: [
    HorizontalMenuService,
    StatsDal,
  ],
})

export class DashboardPageModule {
}
