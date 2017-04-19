import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../interface/index';

import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from '../../service/hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  constructor(
    private heroService: HeroService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    console.log('route', Object.assign({}, this.route))
    console.log('snapshot', this.route.snapshot)
    // this.route.url
    //   .map(function(params: Params){
    //     return params['url']
    //   })
    //   .subscribe(function(data){
    //     console.log('data', data)
    //   })
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    // this.location.back();
    this.router.navigate(['/heroes', { id: this.hero.id, foo: 'foo' }])
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }
}
