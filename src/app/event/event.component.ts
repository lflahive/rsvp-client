import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './event.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  eventId: string = null;
  $event: Observable<any>;
  event: any;

  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {
    if(!this.route.snapshot.paramMap.has('id'))
      return false;

    this.eventId = this.route.snapshot.paramMap.get('id');

    this.$event = this.eventService.getEventById(this.eventId);

    this.$event.subscribe((event) => this.event = event);
  }

}
