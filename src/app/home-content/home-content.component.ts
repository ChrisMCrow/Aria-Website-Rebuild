import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  constructor() { }

  submitForm(checkIn: string, checkOut: string, guests: string) {
    alert(`${checkIn}`);
    window.location.replace(`https://www.aria.com/en/booking/room-booking.html#/rooms?numGuests=${guests}&arrive=${checkIn}&depart=${checkOut}`);
  }

  ngOnInit() {
  }

}
