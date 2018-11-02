import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  submitForm(checkIn: string, checkOut: string, guests: string): void {
    window.location.replace(`https://www.aria.com/en/booking/room-booking.html#/rooms?numGuests=${guests}&arrive=${checkIn}&depart=${checkOut}`);
  }

  
  ngOnInit() {
  }
  
}

$(document).ready(function() {
  $('.dropdown-menu option, .dropdown-menu select').click(function(event) {
    event.stopPropagation();
  });
});
    
