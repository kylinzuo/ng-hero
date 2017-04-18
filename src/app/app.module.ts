import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CrisisCenterRoutingModule } from './crisis-center/crisis-center-routing.module';
import { AppRoutingModule }     from './app-routing.module';

import { HeroService } from '../service/hero.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../service/in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisListComponent } from './crisis-center/crisis-list/crisis-list.component';
import { CrisisCenterHomeComponent } from './crisis-center/crisis-list/crisis-center-home/crisis-center-home.component';
import { CrisisDetailComponent } from './crisis-center/crisis-list/crisis-detail/crisis-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroFormComponent,
    EventEmitterComponent,
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    CrisisCenterRoutingModule,
    AppRoutingModule
  ],
  providers: [ HeroService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
