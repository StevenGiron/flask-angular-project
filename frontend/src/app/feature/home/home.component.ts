import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { HomeService } from './shared/home.service';
import { Usuario } from './shared/usuario';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit {

  usuarios: Usuario[] =[]
  username: string ='';
  password: string ='';
  usuariosDB: Usuario[] =[];


  constructor(
    private homeService: HomeService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {

    this.homeService.getUsuarios()
    .subscribe((usuarios) =>{this.usuarios =usuarios})

  }

  ingresar(){
    this.usuariosDB = [...this.usuarios]
    this.usuariosDB = this.usuarios.filter(usu => usu.usuario === this.username && usu.contrasena === this.password)
    if (this.usuariosDB.length == 0){
      this.messageService.add({severity:'error', summary: 'Error', detail: 'El usuario no existe', life: 2000});
    }else{
      this.router.navigate(['/articulo'])
    }
    
  }

}
