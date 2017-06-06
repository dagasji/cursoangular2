import { Injectable } from '@angular/core';

@Injectable()
export class MasDatosService {

    private nombre : string = "Mi nombre";    

    constructor() {
        
    }
    
    public get Nombre() {
        return this.nombre.toUpperCase();
    }
    
    public set Nombre(valor : string) {
        this.nombre = valor;
    }
    
    public dameLongitud() : number{
        return this.nombre.length;
    }     

}
