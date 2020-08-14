import { Auto } from './../../auto.model';
import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.scss']
})
export class AutosComponent implements OnInit {
  autos: Auto[] = [{
    id: '1',
    nombre: 'BMW',
    modelo: 'Modelo advance',
    año: 2020,
    descripcion: 'Es muy rapido',
    imagen: '../../../assets/images/Imagen1.jpg'
  },
  {
    id: '2',
    nombre: 'Charger',
    modelo: 'Modelo advance',
    año: 2020,
    descripcion: 'Es muy lento',
    imagen: '../../../assets/images/Imagen2.jpg'


  }];
  tittle = '';
  contador = 0;
  constructor() {
    console.log('1.Constructor');
   }


  ngOnChanges(changes: SimpleChanges): void{
      console.log('2.OnChanges');
      console.log(changes);
   }
  ngOnInit(): void {
console.log('3. ng init');
  }

  addCarrosVendidos(): void{
  this.contador++;
  }

}
