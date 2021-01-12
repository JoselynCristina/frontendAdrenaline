import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ContactosRoutingModule, SOLICITUD_COMPONENTS } from './contactos-rounting.module';
import { ContactanosService } from './servicios/contactos.service';



// se declara la constante componentes , shared module para el material , el servicio y el formsmodule para el formulario
@NgModule({
    declarations: [
        SOLICITUD_COMPONENTS
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ContactosRoutingModule
    ],
    providers: [
        ContactanosService
    ]
  })

  // se hace un module propio del modulo que vamos a trabajar y se exportara en el app.module.ts de la raiz
  export class ContactosModule {}
