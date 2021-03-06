import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { OrdenComponent } from './orden/orden.component';
import { AuthGuard } from './services/autentificacion/auth.guard';
import { ComprasComponent } from './compras/compras.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'orden',
    component: OrdenComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'compras',
    component: ComprasComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
