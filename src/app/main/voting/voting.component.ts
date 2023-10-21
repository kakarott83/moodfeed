import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss'],
})
export class VotingComponent implements OnInit {
  value = 2;
  comment!: string;
  iconSize = '30';

  ngOnInit(): void {}

  onChangeRating(event: any) {
    console.log(event);
  }

  onChangeComment(event: any) {}
}
