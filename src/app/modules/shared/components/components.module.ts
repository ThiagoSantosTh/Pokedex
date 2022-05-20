import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    DetailsComponent,
    NavbarComponent,
    SearchComponent,
    ListComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [DetailsComponent, NavbarComponent, SearchComponent, ListComponent],
})
export class ComponentsModule {}
