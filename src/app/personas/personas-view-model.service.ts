import { Injectable } from '@angular/core';

@Injectable()
export class PersonasViewModelService {

    private listado : Array<any> = [];
    private elemento; any = {};
    
    private modo = 'list';
    private idOriginal : any;
    
    constructor() { }

    public load() {
        if(this.listado.length === 0) {
            this.listado = [
                {id: 1, nombre : 'Daniel', apellidos : 'A', edad : '32'},
                {id: 2, nombre : 'Jose', apellidos : 'B', edad : '33'},
                {id: 3, nombre : 'Pedro', apellidos : 'C', edad : '40'},
                {id: 4, nombre : 'David', apellidos : 'D', edad : '35'}
            ];
            
        }
     
    }
    
    public add() {
        this.modo = 'add';
        this.elemento = {};    
    }
    
    public modify(id: any) {
        
        let resultado = this.listado.find(item => item.id === id);
        if (resultado) {
            this.modo = 'edit';
            this.elemento = Object.assign({}, resultado);
            this.idOriginal = id;    
        }
    }
    
    public view(id: any) {
        
        let resultado = this.listado.find(item => item.id === id);
        if (resultado) {
            this.modo = 'view';
            this.elemento = Object.assign({}, resultado);                
        }
    }
    
    public remove(id: any) {
        
        let ind = this.listado.findIndex(item => item.id === id);
        if (ind !== -1 && window.confirm('¿Seguro?')) {
            this.listado.splice(ind, 1);
            this.modo = 'list';                            
        }
    }
    
    public send() {
    
        switch(this.modo) {
            case 'add':
                this.listado.push(this.elemento);
                this.elemento = {};
                this.load();
                this.modo = 'list';
                break;
            case 'edit':
                let ind = this.listado.findIndex(item => item.id === this.idOriginal);
                if (ind !== -1) {
                    this.listado[ind] = this.elemento;
                    this.elemento = {};
                    this.load();      
                }
                this.modo = 'list';
                break;
            case 'view':
                this.elemento = {};
                this.load();
                this.modo = 'list';
                break;
                
                      
        }
    
    }
    
    public cancel() {
        this.elemento = {};
        this.load();
        this.modo = 'list';
    }
        
    
}
