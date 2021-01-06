import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { PortalRoutingModule } from './portal-routing.module';
import { UtilModule } from '../util/util.module';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    UtilModule
  ]
})
export class PortalModule { }
