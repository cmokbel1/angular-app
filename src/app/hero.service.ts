import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HeroesComponent } from './heroes/heroes.component';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('Hero Service: fetched heroes')
    return heroes;
  }
}
