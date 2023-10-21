import { Component } from '@angular/core';

@Component({
  selector: 'app-voting-detail',
  templateUrl: './voting-detail.component.html',
  styleUrls: ['./voting-detail.component.scss'],
})
export class VotingDetailComponent {
  btnStyle = 'btnStyle1';

  buttons = [
    {
      icon: 'fa-solid fa-face-angry fa-2xl',
      color: 'green',
      event: 'good',
      default: 'grey',
    },
    {
      icon: 'fa-solid fa-face-frown fa-2xl',
      color: 'yellow',
      event: 'notgood',
      default: 'grey',
    },
    {
      icon: 'fa-solid fa-face-frown-open fa-2xl',
      color: 'red',
      event: 'grey',
      default: 'grey',
    },
  ];
  selectedMood!: string;

  onClick(button: any) {
    this.buttons.forEach((btn) => {
      if (button !== btn) {
        this.btnStyle = 'btnStyle1';
      }
    });
  }
}
