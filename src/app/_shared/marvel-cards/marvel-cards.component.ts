import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-marvel-cards',
  templateUrl: './marvel-cards.component.html',
  styleUrls: ['./marvel-cards.component.css']
})
export class MarvelCardsComponent implements OnInit {
  @Input() characters;

  constructor() { }

  ngOnInit(): void {
  }

}
