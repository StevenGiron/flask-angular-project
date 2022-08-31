import { Component, Input } from '@angular/core';

import { Articulo } from '../../shared/articulo';

@Component({
  selector: 'app-tarjeta-articulo',
  templateUrl: './tarjeta-articulo.component.html',
  styleUrls: ['./tarjeta-articulo.component.css']
})
export class TarjetaArticuloComponent {

  @Input() articulo!: Articulo

  
  constructor(){
  }
}
