import { Component, OnInit } from '@angular/core';
import {GetDataService} from './../../get-data.service';
import {event} from './../../Event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events:event[] = [];
  constructor(private eventService:GetDataService) { }

  ngOnInit(): void {
    this.events = this.eventService.getEvent();
  }

}
