import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
    moduleId: module.id,
    selector: 'my-hero',
    templateUrl: './heroes.html',
    styleUrls: ['./heroes.css']

})

export class HeroesComponent implements OnInit {
    
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    
    constructor(private heroService: HeroService) { }
    
    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    
    ngOnInit(): void {
        this.getHeroes();
    }
    
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    

}
