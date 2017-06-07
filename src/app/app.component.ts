import { Component } from '@angular/core';


import { DatosService } from './services/datos.service';
import { LoggerService } from '../my-core/services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Hola Mundo!';
    log: LoggerService;
    
    constructor(datos: DatosService, log: LoggerService) {
    
        this.title = datos.Titulo;
        this.log = log;
        
        
    }
    
}
