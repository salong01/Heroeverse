import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../shared/heroes';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../shared/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero[];

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.heroService.getHero(name)
      .subscribe(hero => this.hero = hero);
  }
}
