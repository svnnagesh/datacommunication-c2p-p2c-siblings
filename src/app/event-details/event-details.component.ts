import { Component, OnInit, Input } from '@angular/core';
import { EventsModel } from '../models/list.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  @Input() event:EventsModel[];

  constructor() { }

  ngOnInit() {
  }

}
