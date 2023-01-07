import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  @Input() winner: string = '';
  @Input() color: string = '';
  textToBeDisplayed: string = '';
  constructor() {}
  ngOnChanges() {
    if (this.winner === 'User')
      this.textToBeDisplayed = 'Congratulations! You Won🎉';
    else if (this.winner === 'Computer')
      this.textToBeDisplayed = 'Computer Won❗';
    else this.textToBeDisplayed = 'Its a Tie';
  }

  ngOnInit(): void {}
}
