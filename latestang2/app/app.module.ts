import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './components/app/app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero/hero-detail.component';
import { HeroesComponent } from './components/hero/heroes.component';
import { HeroService } from './components/hero/hero.service';
import { routing } from './components/app/app.routing';


@NgModule ({
    imports: [ BrowserModule, FormsModule, routing ],
    declarations: [ AppComponent, DashboardComponent, HeroesComponent, HeroDetailComponent ],
    providers: [HeroService],
    bootstrap: [ AppComponent ]
    
})

export class AppModule { };
