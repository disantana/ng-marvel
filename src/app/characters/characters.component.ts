import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

  characters = [
    {
      id: 1,
      name: 'Hulk',
      description: 'Green Man'
    },
    {
      id: 2,
      name: 'Batman',
      description: 'Black Man'
    }];

}
