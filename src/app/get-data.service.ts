import { Injectable } from '@angular/core';
import {event} from './Event';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  events:event[] = [];

  constructor() { }

  getEvent(){
    return this.events;
  }
  addEvent(eve:event){
    this.events.push(eve);
  }
}
