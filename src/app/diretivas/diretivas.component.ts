import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {

  public condicao: boolean = true

  constructor() { }


  ngOnInit(): void {

    setInterval(()=>{
      if (this.condicao) {
        this.condicao = false
      }else{
        this.condicao = true
      }
    }, 2000)
  }

}
