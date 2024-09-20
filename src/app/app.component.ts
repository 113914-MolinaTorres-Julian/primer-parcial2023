import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookFlightComponent } from "./components/book-flight/book-flight.component";
import { FlightService } from './services/flight.service';
import { RoomListComponent } from './components/room-list/room-list.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookFlightComponent, RoomListComponent, CheckoutComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica-primer-parcial';

  showRooms: boolean = false;

  constructor(private flightService: FlightService) {
    this.flightService.selectedDestinationId$.subscribe(destinationId => {
      if (destinationId) {
        this.showRooms = true;
      } else {
        this.showRooms = false;
      }
    });
  }
}
