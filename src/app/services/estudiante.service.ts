import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Estudiante } from '../models/estudiante.model';

declare global {
  interface Window {
    __estudiantesData: Estudiante[];
  }
}

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  constructor() {}

  getEstudiantes(): Observable<Estudiante[]> {
    const data = window.__estudiantesData || [];
    return of(data);
  }

  calcularSuma(e: Estudiante): number {
    return e.nota1 + e.nota2 + e.nota3;
  }

  calcularPromedio(e: Estudiante): number {
    return this.calcularSuma(e) / 3;
  }

  obtenerEstado(e: Estudiante): string {
    return this.calcularPromedio(e) >= 13 ? 'Aprobado' : 'Desaprobado';
  }

  obtenerObservacion(e: Estudiante): string {
    const p = this.calcularPromedio(e);
    if (p >= 17) return 'Excelente';
    if (p >= 13) return 'Regular';
    return 'En Riesgo';
  }
}