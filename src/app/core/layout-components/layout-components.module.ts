import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PublicComponent } from './view/public/public.component';
import { SecureComponent } from './view/secure/secure.component';

const components = [
  PublicComponent,
  SecureComponent,
  HeaderComponent,
  FooterComponent,
  SidebarComponent
]


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: components,
  exports: components,
})
export class LayoutComponentsModule { }
