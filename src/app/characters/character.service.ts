import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) {
  }

  getCharacters() {
    return [
      {
        id: 1,
        name: 'SCARLET WITCH',
        nickname: 'WITCH.SCARLET',
        card_image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/012scw_ons_mas_dsk_01_0.jpg',
        description: 'Notably powerful, Wanda Maximoff has fought both against and with the Avengers, attempting to hone her abilities and do what she believes is right to help the world.'
      },
      {
        id: 2,
        name: 'VISION',
        nickname: 'VISIONx',
        card_image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/013vis_ons_mas_dsk_01_0.jpg',
        description: 'A fully unique being, Vision came about thanks to a combination of Wakandan Vibranium, Asgardian lightning, an Infinity Stone, and more.'
      }, {
        id: 3,
        name: 'FALCON',
        nickname: 'FALCONZ',
        card_image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/014fal_ons_mas_dsk_01_2.jpg',
        description: 'When Captain America asked Air Force Veteran Sam Wilson for help, Wilson immediately agreed. He donned the flight suit he’d used in combat to become the Falcon, setting him on a path towards becoming an Avenger.'
      }];
  }
}
