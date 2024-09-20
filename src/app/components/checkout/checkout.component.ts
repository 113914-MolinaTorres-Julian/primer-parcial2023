import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight';
import { Room } from '../../models/room';
import { DateFormatPipe } from '../../pipes/date-format.pipe';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [DateFormatPipe, UpperCasePipe],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent  {
  
}
