import { NgModule } from '@angular/core';
import { ComplaintsDal } from "./complaints.dal";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [],
  imports: [SharedModule],
  providers: [ComplaintsDal]
})

export class ComplaintsModule {
}
