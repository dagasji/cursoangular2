import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

    private titulo : string;
    private nombre : string;
    
    private ocultar = false;
    private lista = [
        {id: 1, nombre : 'cadiz'},
        {id: 2, nombre : 'Málaga'},
        {id: 3, nombre : 'GRANADA'},
        {id: 4, nombre : 'sevilla'},
        ];
    
    private idProvincia = 3;
    
    get Init() {
        return this.nombre;    
    }    
    
    @Input() set Init(valor : string) {
        this.nombre = valor;
    }
    
    constructor() {
        this.nombre = 'mundo';        
    }

    ngOnInit() {
        this.saluda();         
    }
    
    public saluda() {
        this.titulo = `Hola ${this.nombre}`;           
    }
    
    public despide() {
        this.titulo = `Adios ${this.nombre}`;           
    }
    
    
    public diAlgo(algo : string) {
        this.titulo = `Dice ${algo}`;           
    }
    
    public cambiaVer() {        
        this.ocultar = !this.ocultar;        
    }
    
    addProvincia(nombre : string) {
        this.lista.push({id : (this.lista.length + 1), 
                nombre : nombre})    
        
        this.idProvincia = this.lista.length;
    }

}
