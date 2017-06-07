import { Component, OnInit } from '@angular/core';
import { PersonasViewModelService } from './personas-view-model.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor(public vm : PersonasViewModelService) { }

  ngOnInit() {      
      this.vm.load();
  }

}


@Component({
  selector: 'app-personas-list',
  templateUrl: './list.html'
 
})
export class PersonasListComponent  {

  constructor(public vm : PersonasViewModelService) { } 

}

@Component({
  selector: 'app-personas-form',
  templateUrl: './form.html'
 
})
export class PersonasFormComponent{

  constructor(public vm : PersonasViewModelService) { } 

}

@Component({
  selector: 'app-personas-view',
  templateUrl: './view.html'
 
})
export class PersonasViewComponent  {

  constructor(public vm : PersonasViewModelService) { } 

}
