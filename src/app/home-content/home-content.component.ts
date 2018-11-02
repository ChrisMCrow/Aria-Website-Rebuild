import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  title: "HomeContent";
  discount: string = "";
  programPath: string = "";
  specialRatesClicked: boolean = false;
  valid: boolean = true;
  AAARate: boolean = false;
  militaryRate: boolean = false;

  applyRate(militaryRate?: string, AAARate?: string, promoCode?: string, iata?: string): void {
    if (promoCode || iata) {
      this.valid = false;
    } else if (AAARate) {
      this.programPath = `&programId=1d8e141f-1273-4a0a-b301-b62850733702`;
      this.discount = "AAA Rate";
      this.specialRatesClicked = false;
      this.valid = true;
    } else if (militaryRate) {
      this.programPath = `&programId=02db17ea-0cdc-4d21-bda8-db86c5d5d43a`;
      this.discount = "Military Rate";
      this.specialRatesClicked = false;
      this.valid = true;
    } else {
      this.specialRatesClicked = false;
    }
  }

  submitForm(checkIn: string, checkOut: string, guests: string, program?: string): void {
    console.log(checkIn, checkOut);
    window.location.href = `https://www.aria.com/en/booking/room-booking.html#/rooms?numGuests=${guests}${this.programPath}&arrive=${checkIn}&depart=${checkOut}`;
  }

  specialRates(): void {
    this.specialRatesClicked === true ?
    this.specialRatesClicked = false :
    this.specialRatesClicked = true;
  }

  removeRate() {
    this.programPath = "";
    this.discount = "";
  }

  ngOnInit() {
  }

}