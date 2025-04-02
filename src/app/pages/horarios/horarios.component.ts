import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';


export interface Aulas {
  id: number;
  name: string;
  opciones: string[];
}

const ELEMENT_DATA: Aulas[] = [
  { id: 1, name: '101', opciones: ['Editar', 'Deshabilitar'] },
  { id: 2, name: '102', opciones: ['Editar', 'Deshabilitar'] },
  { id: 3, name: '201', opciones: ['Editar', 'Deshabilitar'] },
  { id: 4, name: '202', opciones: ['Editar', 'Deshabilitar'] },
  { id: 5, name: 'Entorno Virtual', opciones: ['Editar', 'Deshabilitar']}
];

@Component({
  selector: 'app-horarios',
  imports: [MatDividerModule, MatTableModule, MatButtonModule, CommonModule],
  templateUrl: './horarios.component.html',
  styleUrl: './horarios.component.scss'
})


export class HorariosComponent {
  headers:string[]=['id','name','opciones']
  dataSource = ELEMENT_DATA;
}
