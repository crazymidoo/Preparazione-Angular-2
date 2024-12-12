import { Component, OnInit } from '@angular/core';
import { MacchinaComponent } from '../macchina/macchina.component';

@Component({
  selector: 'app-container',
  imports: [MacchinaComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent implements OnInit{
  names:string[]
  constructor (){
    this.names = [
      "Scavatore",
      "Moustarizzatore",
      "Mattionizzatore",
      "Mattante",
      "Dambrotizzatore",
      "Aishatizzatore",
      "Mihalizzatore",
      "Merganizzatore",
      "Carlotizzatore",
      "Papagnizzatore"
    ]
  }
ngOnInit(): void {
  
}
}
