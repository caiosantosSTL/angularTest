import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked {
  /*title = 'curso-angular'
  titlex = 'Bem vindo'*/

  public valor: number = 1

  public destruir:boolean = true


  constructor (){}

  public addFunc(): number{
    return this.valor += 1 
  }

  public destruirFunc(){
    this.destruir = false
  }

  

  ngOnInit(): void {
      setTimeout(() => {console.log("Toda app foi carregada");
      }, 5000)
      
  }

  ngDoCheck(): void {
      console.log("execut ngDoCheck");
      
  }

  ngAfterContentChecked(): void {
    console.log("execut ngAfterContentChecked");
  }

  ngAfterViewChecked(): void {
    console.log("execut ngAfterViewChecked");
  }

  ngAfterContentInit(): void {
    console.log("execut ngAfterContentInit");
  }

}
