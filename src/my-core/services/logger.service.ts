import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }
    
  public error(msg: string) {    
    console.error(msg); 
  }
    
  public info(msg: string) {    
    console.info(msg); 
  }
    
  public log(msg: string) {    
    console.log(msg); 
  }

}
