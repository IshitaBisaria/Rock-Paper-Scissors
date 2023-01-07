import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {
  computerChoice: number = 0;
  userChoice: number = 0;
  winner: string = '';
  gamePlayed: boolean = false;
  color: string = '';

  constructor() {}

  ngOnInit(): void {}

  registerUserChoice(uChoice: number) {
    this.registerComputerChoice();
    this.userChoice = uChoice;
    this.calculateWinner();
    this.gamePlayedButton();
  }

  registerComputerChoice() {
    this.computerChoice = Math.trunc(Math.random() * 3) + 1;
  }

  playAgain() {
    this.userChoice = 0;
    this.winner = '';
    this.gamePlayedButton();
  }

  calculateWinner() {
    if (this.userChoice === this.computerChoice) this.winner = 'Tie';
    else {
      if (this.userChoice === 1) {
        switch (this.computerChoice) {
          case 2:
            this.winner = 'Computer';
            break;
          case 3:
            this.winner = 'User';
        }
      } else if (this.userChoice === 2) {
        switch (this.computerChoice) {
          case 1:
            this.winner = 'User';
            break;
          case 3:
            this.winner = 'Computer';
        }
      } else {
        switch (this.computerChoice) {
          case 1:
            this.winner = 'Computer';
            break;
          case 2:
            this.winner = 'User';
        }
      }
    }
    if (this.winner === 'User') this.color = 'red';
    else if (this.winner === 'Computer') this.color = 'blue';
    else this.color = 'green';
  }

  gamePlayedButton() {
    if (this.userChoice !== 0) this.gamePlayed = true;
    else this.gamePlayed = false;
    if (this.winner === '') this.color = 'black';
  }
}
