import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-cotrol',
  templateUrl: './game-cotrol.component.html',
  styleUrls: ['./game-cotrol.component.css']
})
export class GameCotrolComponent implements OnInit {
  @Output() eventEmit = new EventEmitter<number>();
  storeValue;
  lastNumber = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  onStart() {
    this.storeValue = setInterval(
      () => {
        this.eventEmit.emit(this.lastNumber + 1);
        this.lastNumber++;
      }, 1000
    );
  }

  onPause() {
    clearInterval(this.storeValue);
  }
}

