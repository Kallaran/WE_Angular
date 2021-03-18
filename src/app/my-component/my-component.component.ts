import { Component, OnInit } from '@angular/core';
import { Pokemon } from "../pokemon";


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  selectedPokeId: string ='';
  id: string = '';
  searchPokeName: string ='';

  pokes : Pokemon[] = [];

  constructor() { 
  	this.pokes.push(new Pokemon('1', 'beedrill'));
  	this.pokes.push(new Pokemon('2', 'pidgey'));
  	this.pokes.push(new Pokemon('3', 'pidgeotto'));
  	this.pokes.push(new Pokemon('4', 'rattata'));
  	this.pokes.push(new Pokemon('5', 'raticate'));
  	this.pokes.push(new Pokemon('6', 'blastoise'));

  }

  ngOnInit(): void {
  }
  


}
