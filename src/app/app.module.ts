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
import { PersonasComponent } from './personas/personas.component';
import { PersonasListComponent } from './personas/personas.component';
import { PersonasFormComponent } from './personas/personas.component';
import { PersonasViewComponent } from './personas/personas.component';
import { PersonasViewModelService } from './personas/personas-view-model.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    CapitalizePipe,
    CalculadoraComponent,
    PersonasComponent,
    PersonasListComponent,
    PersonasFormComponent,
    PersonasViewComponent,
  ],
  imports: [
    BrowserModule, MyCoreModule,FormsModule
  ],
  providers: [MasDatosService, DatosService, LoggerService, PersonasViewModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
