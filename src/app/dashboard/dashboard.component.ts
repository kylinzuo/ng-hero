import { Component, OnInit } from '@angular/core';

import { Hero } from '../../interface/index';
import { HeroService } from '../../service/hero.service';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  isClass: boolean = true;
  fontSizePx: number = 20;
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5))
  }

  receive (e): void {
    console.log(e)
  }
}
