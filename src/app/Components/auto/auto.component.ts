import { Auto } from './../../auto.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent implements OnInit {
  @Input() auto: Auto;
  @Output() autoVendido: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  comprar(id: string): void{
console.log('Se vendio el auto ' + id );
this.autoVendido.emit();
  }

}
