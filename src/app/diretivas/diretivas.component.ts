import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {

  public condicao: boolean = true

  public list: Array<{ nome: string }> = [
    {
      nome: "Luca"
    },
    {
      nome: "Lara"
    },
    {
      nome: "Tomi"
    },
    {
      nome: "Liza"
    },

  ]

  public nome : string = "Luca"
  public valorclass: boolean = true


  constructor() { }

  public onClickAdd(){
    this.list.push({nome: "Joo"})
  }
  
  public onClickEventList(event: number){
    this.list.splice(event, 1)
  }

  public changeValueClass(){
    if (this.valorclass == true) {
      this.valorclass = false
    }else if(this.valorclass == false){
      this.valorclass = true
    }
  }

  ngOnInit(): void {

    setInterval(() => {
      if (this.condicao) {
        this.condicao = false
      } else {
        this.condicao = true
      }
    }, 2000)
  }

}
