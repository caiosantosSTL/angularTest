import { Component, OnChanges, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title:string = "bonvenon";

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    console.log("foi add title externo do componente");
    
  }

  ngOnDestroy(): void {
      console.log("Este componente foi destruido ---------------");
      
  }

}
