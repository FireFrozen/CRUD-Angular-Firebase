import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './back-button/back-button.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    BackButtonComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    BackButtonComponent,
  ]
})
export class ComponentsModule { }
