import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  title: "HomeContent";

  submitForm(checkIn: string, checkOut: string, guests: string): void {
    window.location.replace(`https://www.aria.com/en/booking/room-booking.html#/rooms?numGuests=${guests}&arrive=${checkIn}&depart=${checkOut}`);
  }

  specialRatesClicked: boolean = false;
  specialRates(): void {
    this.specialRatesClicked === true ?
    this.specialRatesClicked = false :
    this.specialRatesClicked = true;
  }

  ngOnInit() {
  }

}
