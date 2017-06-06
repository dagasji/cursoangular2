import { Injectable } from '@angular/core';

import { MasDatosService } from './mas-datos.service';

import { LoggerService } from '../../my-core/services/logger.service';



@Injectable()
export class DatosService {
        
        

    constructor(private datos : MasDatosService, private log : LoggerService) {
        
    }
    
    
    public get Titulo() {
        this.log.log(`Pide el titulo: ${this.datos.Nombre}`);
        return this.datos.Nombre;
    }

}
