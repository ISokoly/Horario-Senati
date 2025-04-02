import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Carreras {
  id: number;
  name: string;
  semestre: number;
  opciones: string[];
}

const ELEMENT_DATA: Carreras[] = [
  { id: 1, name: 'Técnico en Electrónica', semestre: 1, opciones: ['Editar', 'Deshabilitar'] },
  { id: 2, name: 'Técnico en Mecánica Automotriz', semestre: 2, opciones: ['Editar', 'Deshabilitar'] },
  { id: 3, name: 'Técnico en Computación', semestre: 3, opciones: ['Editar', 'Deshabilitar'] },
  { id: 4, name: 'Técnico en Electromecánica', semestre: 4, opciones: ['Editar', 'Deshabilitar'] },
  { id: 5, name: 'Técnico en Telecomunicaciones', semestre: 5, opciones: ['Editar', 'Deshabilitar'] },
  { id: 6, name: 'Técnico en Construcción Civil', semestre: 6, opciones: ['Editar', 'Deshabilitar'] },
  { id: 7, name: 'Técnico en Gastronomía', semestre: 1, opciones: ['Editar', 'Deshabilitar'] },
  { id: 8, name: 'Técnico en Energías Renovables', semestre: 2, opciones: ['Editar', 'Deshabilitar'] },
  { id: 9, name: 'Técnico en Diseño Gráfico', semestre: 3, opciones: ['Editar', 'Deshabilitar'] },
  { id: 10, name: 'Técnico en Software', semestre: 4, opciones: ['Editar', 'Deshabilitar'] }
];


@Component({
  selector: 'app-carreras',
  imports: [MatDividerModule, MatTableModule, MatButtonModule, CommonModule, FormsModule],
  templateUrl: './carreras.component.html',
  styleUrl: './carreras.component.scss'
})
export class CarrerasComponent {
  headers:string[]=['id','name','semestre','opciones']
  dataSource = ELEMENT_DATA;
  careerName: string = '';

  closeDialog() {
    const modal = document.getElementById('modal-overlay');
    if (modal) modal.style.display = 'none'; // Close the modal
  }

  submitCareer() {
    if (this.careerName) {
      const modal = document.getElementById('modal-overlay');
      if (modal) modal.style.display = 'none'; // Close the modal
      alert(`Carrera agregada: ${this.careerName}`);
    }
  }
  openModal() {
    const modal = document.getElementById('modal-overlay');
    if (modal) modal.style.display = 'flex'; // Open the modal
  }
}
