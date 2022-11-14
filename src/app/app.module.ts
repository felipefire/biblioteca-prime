import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import { LibrosComponent } from './libros/libros.component';
import { AutoresComponent } from './autores/autores.component';
import {HttpClientModule} from '@angular/common/http'; 
import {TableModule} from 'primeng/table';
import { FormularioLibroComponent } from './libros/formulario-libro/formulario-libro.component';
import {DialogModule} from 'primeng/dialog'
import{MessagesModule} from 'primeng/messages'
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import { MainAppComponent } from './main-app/main-app.component';
import { LoginComponent } from './login/login.component';
import{ PasswordModule } from 'primeng/password';


@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    AutoresComponent,
    FormularioLibroComponent,
    MainAppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    HttpClientModule,
    TableModule,
    CardModule,
    DialogModule,
    MessagesModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    InputNumberModule,
    ConfirmDialogModule,
    MessagesModule,
    DropdownModule,
    PasswordModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
