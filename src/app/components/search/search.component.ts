import { Component, OnInit } from '@angular/core';
import { DatahService,Heroe } from '../../services/datah.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  resultadoB:Heroe[] = [];

  constructor(private data:DatahService, private rot:ActivatedRoute, private router:Router) { }

  irtoheroe(value:string)
  {
   this.router.navigate(['/heroe',value]);
  }

  ngOnInit() {
    this.rot.params.subscribe(params=>{
       this.resultadoB =  this.data.buscarheroe(params['nombre']);//el mismo de las routes
       console.log(this.resultadoB);
    });
    

  }

}
