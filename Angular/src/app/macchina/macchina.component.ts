import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-macchina',
  imports: [],
  templateUrl: './macchina.component.html',
  styleUrl: './macchina.component.css'
})
export class MacchinaComponent {
  @Input () name : string  = ""
  materiali : string[];
  constructor(){
    this.materiali = ["Bulloni", "Chiodi", "Viti"];
  } 
ngOnInit(){

}
}
