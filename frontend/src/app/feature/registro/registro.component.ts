import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MessageService} from 'primeng/api';

import { Usuario } from '../home/shared/usuario';
import { RegistroService } from './shared/registro.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [MessageService]
})
export class RegistroComponent implements OnInit {

  usuario: Usuario={
    usuario: '',
    contrasena: ''
  }

  constructor(private registroService: RegistroService,
              private router: Router,
              private messageService: MessageService){}

  ngOnInit(): void {
  }

   crear(){
    this.registroService.crearUsuario(this.usuario)

    .subscribe(()=>{
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Usuario registrado correctamente'})
      this.router.navigate(['/home'])
    },
    ({error}) => {
      this.messageService.add({severity:'error', summary: 'Success', detail: error.message});
    
    })
  }
}
