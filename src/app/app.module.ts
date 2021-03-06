import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule, ButtonsModule, CarouselModule, ModalModule } from 'ngx-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ScrollbarModule } from 'ngx-scrollbar';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ComidaComponent } from './tools/componentes de comidas/comida/comida.component';
import { OrdenComponent } from './orden/orden.component';
import { FacturaDetalladaComponent } from './tools/componentes de pago/factura-detallada/factura-detallada.component';
import { ComidaAdminComponent } from './tools/componentes de comidas/comida-admin/comida-admin.component';
// tslint:disable-next-line:max-line-length
import { FormularioProductoNuevoComponent } from './tools/componentes de admin/formulario-producto-nuevo/formulario-producto-nuevo.component';
// tslint:disable-next-line:max-line-length
import { FormularioEditarProductoComponent } from './tools/componentes de admin/formulario-editar-producto/formulario-editar-producto.component';
import { NuevoExtraComponent } from './tools/componentes de admin/nuevo-extra/nuevo-extra.component';
import { ComidaCarritoComponent } from './tools/componentes de comidas/comida-carrito/comida-carrito.component';
import { RegisterModalComponent } from './tools/componentes de autentificacion/register-modal/register-modal.component';
import { Register2Component } from './tools/componentes de autentificacion/register2/register2.component';
import { ComprasComponent } from './compras/compras.component';
import { PaypalbtnComponent } from './tools/componentes de pago/paypalbtn/paypalbtn.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ComidaComponent,
    OrdenComponent,
    FacturaDetalladaComponent,
    ComidaAdminComponent,
    FormularioProductoNuevoComponent,
    FormularioEditarProductoComponent,
    NuevoExtraComponent,
    ComidaCarritoComponent,
    RegisterModalComponent,
    Register2Component,
    ComprasComponent,
    PaypalbtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    ScrollbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
