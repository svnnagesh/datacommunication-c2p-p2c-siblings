import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Events, EventsModel } from '../models/list.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events:EventsModel[];
  @Output() eventClicked =  new EventEmitter<Event>();

  constructor(private eventsList:Events) { }

  ngOnInit() {
    this.events = this.eventsList.allEvents();
  }

  onClick(event) {
    this.eventClicked.emit(event);
  }

  

}
