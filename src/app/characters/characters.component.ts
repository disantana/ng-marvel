import {Component, OnInit} from '@angular/core';
import {CharacterService} from './character.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters = [];

  constructor(private characterService: CharacterService) {
  }

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
  }

}
