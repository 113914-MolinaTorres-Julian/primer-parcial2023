import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() roomSelected = new EventEmitter<Room>();

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flightService.selectedDestinationId$.subscribe(destinationId => {
      this.destinationId = destinationId;
      this.rooms = ROOM_LIST.filter(room => room.destinationId === this.destinationId);
    });
  }

  selectRoom(room: Room): void {
    this.roomSelected.emit(room)
  }
}
