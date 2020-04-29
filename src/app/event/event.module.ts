import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { CreateEventComponent } from './create-event/create-event.component';


@NgModule({
  declarations: [EventComponent, CreateEventComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    EventRoutingModule
  ]
})
export class EventModule { }
