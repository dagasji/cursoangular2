import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

    private titulo : string;
    private nombre : string;
    
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
    

}
