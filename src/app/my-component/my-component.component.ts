import { Component, OnInit } from '@angular/core';
import { Pokemon } from "../pokemon";
import { PokeAPIServiceService } from "../poke-apiservice.service";



@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServiceService]
})
export class MyComponentComponent implements OnInit {

  selectedPokeId: string ='';
  id: string = '';
  searchPokeName: string ='';

  pokes : Pokemon[] = [];

  constructor(private pokeService: PokeAPIServiceService) { 


  }

  ngOnInit(): void {
  	this.pokeService.getPokemons().subscribe((data => {
  		data.results.forEach((e, index) => {
  			this.pokes.push(new Pokemon(''+index, e.name, e.url));
  		});
  	}));

  }
  
  go(){
  	console.log(this.selectedPokeId);
  }


}
