import { Component, OnInit } from '@angular/core';
import { DatahService,Heroe } from '../../services/datah.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  result:Heroe;
   constructor(private data:DatahService, private rot:ActivatedRoute) { }

  ngOnInit() {
    this.rot.params.subscribe(params=>{
      this.result =  this.data.verheroe(params['name']);//el mismo de las routes
      console.log(this.result);
  });

}
}
