import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
        
    private acumulado :number = 0;
    private previo : number;
    private operador;
    
    private valorMostrado;
    
    private decimalActivo = false;
    private tieneDecimal = false;
    

    constructor() { }

    ngOnInit() {

    }
    
    public addOperador(operador : number) {
        
        this.decimalActivo = false;
        
        this.previo = this.valorMostrado;
        
        if (this.operador != null) {
            this.calcular();    
        } else {
            this.acumulado =  Number(this.previo);   
        }        
        
        this.operador = operador;
        this.valorMostrado = '';
        
        
        
    }
    
    
    public calcular() {
        
        if (this.operador == 1) {            
            this.acumulado = Number(this.acumulado )  + Number(this.previo);     
        } else if (this.operador == 2) {                        
            this.acumulado = Number(this.acumulado )  - Number(this.previo);
        } else if (this.operador == 3) {            
            this.acumulado = Number(this.acumulado )  * Number(this.previo);
        } else {
            this.acumulado = Number(this.acumulado )  / Number(this.previo);    
        }
    }
    
    public total() {
        
        this.decimalActivo = false;
        
        this.previo = this.valorMostrado;
        
        this.calcular();
    }
    
    public addNumero(valor : string) {
        
        if (!this.tieneDecimal) {
            this.decimalActivo = true;
        }
        
        if(this.valorMostrado == null) {
            this.valorMostrado = valor;
        } else {
            this.valorMostrado = this.valorMostrado + valor;   
        }
        
    }
    
    public addDecimal(){
        this.valorMostrado = this.valorMostrado + ".";
        this.decimalActivo = false;
        this.tieneDecimal = true;
    }
    
    public limpiar() {
        this.decimalActivo = false;
        this.tieneDecimal = false;
        this.valorMostrado = "";
        this.acumulado = 0;
        this.previo = 0;
        this.operador = null;
        
        
    }
    
  

}
