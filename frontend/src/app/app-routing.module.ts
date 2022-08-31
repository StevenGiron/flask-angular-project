import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { RegistroComponent } from './feature/registro/registro.component';

const routes: Routes = [
  
  {path: 'home', component: HomeComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'articulo', loadChildren: () => import('./feature/articulos/articulo.module').then(m => m.ArticuloModule)}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
