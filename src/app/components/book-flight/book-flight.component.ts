import { Component, OnInit } from '@angular/core';
import { FLIGHT_LIST } from '../../data/flight-data';
import { DateFormatPipe } from '../../pipes/date-format.pipe';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-flight',
  standalone: true,
  imports: [DateFormatPipe, CommonModule],
  templateUrl: './book-flight.component.html',
  styleUrl: './book-flight.component.css'
})
export class BookFlightComponent implements OnInit {
  flights = FLIGHT_LIST;

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

  selectFlight(destinationId: string): void {
    this.flightService.setSelectedDestinationId(destinationId);
    
  }
}
