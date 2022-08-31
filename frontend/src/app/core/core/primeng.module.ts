import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {GalleriaModule} from 'primeng/galleria';
import {InputTextModule} from 'primeng/inputtext';
import {TabMenuModule} from 'primeng/tabmenu';
import {ToastModule} from 'primeng/toast';


@NgModule({
  
  exports: [
    ButtonModule,
    CardModule,
    GalleriaModule,
    InputTextModule,
    TabMenuModule,
    ToastModule
    
    
  ]
})
export class PrimengModule { }
