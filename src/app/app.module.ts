import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyCoreModule } from '../my-core/my-core.module';

import { MasDatosService } from './services/mas-datos.service';
import { DatosService } from './services/datos.service';

import { LoggerService } from '../my-core/services/logger.service';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MyCoreModule,
  ],
  providers: [MasDatosService, DatosService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
