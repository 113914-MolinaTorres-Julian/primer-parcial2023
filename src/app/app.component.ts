import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookFlightComponent } from "./components/book-flight/book-flight.component";
import { FlightService } from './services/flight.service';
import { RoomListComponent } from './components/room-list/room-list.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CommonModule } from '@angular/common';
import { Room } from './models/room';

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
  showCheckout: boolean = false;
  selectedRoom: Room | null = null;

  constructor(private flightService: FlightService) {
    this.flightService.selectedDestinationId$.subscribe(destinationId => {
      if (destinationId) {
        this.showRooms = true;
      } else {
        this.showRooms = false;
        this.showCheckout = false; // Reset cuando no hay destino
      }
    });
  }

  selectRoom(room: Room): void {
    this.selectedRoom = room;
    this.showCheckout = true; // Muestra el componente de checkout
    this.showRooms = false; // Oculta las habitaciones
  }
}
