import { Component, Input, OnInit } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight';
import { Room } from '../../models/room';
import { DateFormatPipe } from '../../pipes/date-format.pipe';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { Form, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [DateFormatPipe, UpperCasePipe, CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  formData = {
    firstName: '',
    lastName: '',
    identificationType: '',
    identificationNumber: '',
    address: '',
    country: '',
    city: ''
  };

  @Input() room: Room | null = null; // Recibe la habitación seleccionada
  @Input() flight: Flight | null = null;

  onSubmit(form: any) {
    if (!form.valid) {
      console.log('Formulario inválido');
      return;
    } else {
      console.log('Formulario válido: ', this.formData);
    }
  }
}
