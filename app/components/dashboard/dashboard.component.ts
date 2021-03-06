import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';


@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.css']
})

export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];
    selectedHero: Hero;
    
    constructor(
        private router: Router,
        private heroService: HeroService) { 
    }
    
    ngOnInit(): void {
        this.heroService.getHeroes()
                        .then(heroes => this.heroes = heroes.slice(1, 5));
    }
    
    gotoDetail(hero: Hero): void { 
        this.router.navigate(['/detail', hero.id]);
    }
}

