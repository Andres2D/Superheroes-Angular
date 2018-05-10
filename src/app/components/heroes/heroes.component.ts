import { Component, OnInit } from '@angular/core';
import { DatahService, Heroe } from '../../services/datah.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[];

  constructor(private data:DatahService, private router:Router) {
    this.heroes=this.data.listarHeroes();
   }
   irtoheroe(value:string)
   {
    this.router.navigate(['/heroe',value]);
   }
  ngOnInit() {

  }

}
