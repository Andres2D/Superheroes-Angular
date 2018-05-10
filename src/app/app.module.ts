import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { appRouting } from './app.routes';
import { DatahService } from './services/datah.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroesComponent,
    HeroeComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [DatahService],
  bootstrap: [AppComponent]
})
export class AppModule { }
