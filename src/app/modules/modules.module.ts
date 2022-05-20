import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsModule } from './shared/components/components.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ModulesRoutingModule, ComponentsModule],
})
export class ModulesModule {}
