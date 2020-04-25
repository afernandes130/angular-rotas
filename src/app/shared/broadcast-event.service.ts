import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BroadcastEventService {

  private static emmitter : {
    [nomeEvento: string]: EventEmitter<any>
  } = {}

  static get(nomeEvento:string): EventEmitter<any>{
    
    if(!this.emmitter[nomeEvento])
      this.emmitter[nomeEvento] = new EventEmitter<any>();
    console.log(this.emmitter)
    return this.emmitter[nomeEvento];
  }

  constructor() { }
}
