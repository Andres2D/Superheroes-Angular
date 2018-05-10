import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';//para la busqueda


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private btext:string;

  constructor(private srch:Router) {
   }

   buscar(value:string)
   {
      this.srch.navigate(['/search',value]);
   }

  ngOnInit() {
  }
}
