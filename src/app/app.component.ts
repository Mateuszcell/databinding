import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNums: number[] = [];
  evenNums: number[] = [];

  onEventEmit(checkNumber: number) {
    if (checkNumber % 2 === 0) {
      this.evenNums.push(checkNumber);
    } else {
      this.oddNums.push(checkNumber);
    }
  }}
