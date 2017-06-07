//Modulos generales
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Mis modulos
import { MyCoreModule } from '../my-core/my-core.module';

//Servicios
import { MasDatosService } from './services/mas-datos.service';
import { DatosService } from './services/datos.service';

import { LoggerService } from '../my-core/services/logger.service';

// Componentes
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { CapitalizePipe } from '../my-core/pipes/capitalize.pipe';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    CapitalizePipe,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule, MyCoreModule,FormsModule
  ],
  providers: [MasDatosService, DatosService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
