import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Usuario } from '../../home/shared/usuario';



@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient){}

  crearUsuario( usuario: Usuario ):Observable<Usuario>{
    return this.http.post<Usuario>(`${environment.endpoint}/usuarios/create`, usuario)
  }
}
