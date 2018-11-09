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
import { ComidaComponent } from './tools/comida/comida.component';
import { CarouselComponent } from './tools/carousel/carousel.component';
import { DropdownsComponent } from './tools/dropdowns/dropdowns.component';
import { NavbarComponent } from './tools/navbar/navbar.component';
import { OrdenComponent } from './orden/orden.component';
import { FacturaDetalladaComponent } from './tools/factura-detallada/factura-detallada.component';
import { RegisterComponent } from './tools/register/register.component';
import { ComidaAdminComponent } from './tools/comida-admin/comida-admin.component';
import { FormularioProductoNuevoComponent } from './tools/formulario-producto-nuevo/formulario-producto-nuevo.component';
import { FormularioEditarProductoComponent } from './tools/formulario-editar-producto/formulario-editar-producto.component';
import { NuevoExtraComponent } from './tools/nuevo-extra/nuevo-extra.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ComidaComponent,
    CarouselComponent,
    DropdownsComponent,
    NavbarComponent,
    OrdenComponent,
    FacturaDetalladaComponent,
    RegisterComponent,
    ComidaAdminComponent,
    FormularioProductoNuevoComponent,
    FormularioEditarProductoComponent,
    NuevoExtraComponent,
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
    ScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
