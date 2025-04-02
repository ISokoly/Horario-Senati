import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

export interface Grupos {
  id: number;
  name: string;
  carreras: string;
  age: number;
  periodo: number;
  semestre: string;
  opciones: string[];
}

const ELEMENT_DATA: Grupos[] = [
  { id: 1, name: '2025-10-ING-SOFT-S1-01', age: 2025, periodo: 10, carreras:'Ing. de Software con IA', semestre:'I',opciones: ['Horario'] },
  { id: 2, name: '2025-10-ING-SOFT-S1-02', age: 2025, periodo: 10, carreras:'Ing. de Software con IA', semestre:'I',opciones: ['Horario'] },
  { id: 3, name: '2025-10-DIS-GRA-S2-02', age: 2025, periodo: 10, carreras:'Diseño Grafico', semestre:'II',opciones: ['Horario'] },
  { id: 4, name: '2025-10-DIS-GRA-S2-02', age: 2025, periodo: 10, carreras:'Diseño Grafico', semestre:'II',opciones: ['Horario'] },
  { id: 5, name: '2025-10-MEC-AUT-S2-01', age: 2025, periodo: 10, carreras:'Mecánica Automotriz', semestre:'III',opciones: ['Horario'] },
  { id: 4, name: '2025-10-DIS-GRA-S2-02', age: 2025, periodo: 10, carreras:'Mecánica Automotriz', semestre:'III',opciones: ['Horario'] }
];

@Component({
  selector: 'app-grupos',
  imports: [MatDividerModule, MatTableModule, MatButtonModule, CommonModule],
  templateUrl: './grupos.component.html',
  styleUrl: './grupos.component.scss'
})
export class GruposComponent {
  headers:string[]=['id','name', 'age', 'periodo', 'carreras', 'semestre','opciones']
  dataSource = ELEMENT_DATA;
}
