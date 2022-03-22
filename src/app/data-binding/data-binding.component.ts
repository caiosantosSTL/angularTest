import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = 'Jonas'
  public idade: number = 44

  public itWasDisabled: boolean = true
  public imgFonte = 'https://images.unsplash.com/photo-1647795631119-c1fcbe21c5f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'

  public position: {x: number, y: number} = {x: 0, y: 0}

  constructor() { }

  ngOnInit(): void {
  }

  // **********

  public alertInfo(valor: MouseEvent){
    console.log(valor); //show terminal all events
    
  }

  public mouseMove(valor: MouseEvent){
    this.position.x = valor.offsetX
    this.position.y = valor.offsetY
  }

}
