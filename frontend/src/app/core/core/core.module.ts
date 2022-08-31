import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { PrimengModule } from './primeng.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    PrimengModule,
    NavbarComponent
  ]
})
export class CoreModule { }
