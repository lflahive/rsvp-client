import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEventById(id: string) {
    return this.http.get(`${environment.apiBaseUrl}GetEventById?eventId=${id}`);
  }
}
