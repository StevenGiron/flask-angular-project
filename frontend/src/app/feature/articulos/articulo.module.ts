import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ArticuloRoutingModule } from './articulo-routing.module';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { AuthModule } from '../../auth/auth.module';
import { CoreModule } from '../../core/core/core.module';
import { ListadoComponent } from './components/listado/listado.component';
import { SharedModule } from '../../shared/shared.module';
import { TarjetaArticuloComponent } from './components/tarjeta-articulo/tarjeta-articulo.component';
import { VerComponent } from './components/ver/ver.component';


@NgModule({
  declarations: [
    ListadoComponent,
    ArticuloComponent,
    TarjetaArticuloComponent,
    VerComponent

    
  ],
  imports: [
    CommonModule,
    ArticuloRoutingModule,
    SharedModule,
    FlexLayoutModule, 
    AuthModule,
    CoreModule
  ]
})
export class ArticuloModule { }
