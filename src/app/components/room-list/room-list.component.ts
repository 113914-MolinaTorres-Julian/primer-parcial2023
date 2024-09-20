import { Component, OnInit } from '@angular/core';
import { Room } from '../../models/room';
import { ROOM_LIST } from '../../data/room-data';
import { FlightService } from '../../services/flight.service';
import { CommonModule, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [UpperCasePipe, CommonModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css'
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = [];
  destinationId: string = '';

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flightService.selectedDestinationId$.subscribe(destinationId => {
      this.destinationId = destinationId;
      this.rooms = ROOM_LIST.filter(room => room.destinationId === this.destinationId);
    });
  }

  selectRoom(room: Room): void {
    // Implementa la lógica para manejar la selección de la habitación
    console.log('Selected room:', room);
    // Puedes agregar lógica para redirigir al usuario a otro componente o hacer algo con la habitación seleccionada
  }
}
