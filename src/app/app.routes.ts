import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search/:nombre', component: SearchComponent },// nombre: nombre a buscar
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:name', component: HeroeComponent },// id: identificador del heroe
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);