import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Flight } from '../models/flight';
import { Room } from '../models/room';
import { ROOM_LIST } from '../data/room-data';
import { FLIGHT_LIST } from '../data/flight-data';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private selectedDestinationId = new BehaviorSubject<string>('');
  selectedDestinationId$ = this.selectedDestinationId.asObservable();

  setSelectedDestinationId(destinationId: string): void {
    this.selectedDestinationId.next(destinationId);
  }

  getFlightByDestinationId(destinationId: string): Flight | undefined {
    return FLIGHT_LIST.find(flight => flight.destinationId === destinationId);
  }
}
