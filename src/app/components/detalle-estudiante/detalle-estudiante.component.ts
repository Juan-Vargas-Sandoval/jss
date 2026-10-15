import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from '../../models/estudiante.model';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-detalle-estudiante',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-estudiante.component.html',
  styleUrls: ['./detalle-estudiante.component.css']
})
export class DetalleEstudianteComponent implements OnInit {
  estudiante?: Estudiante;
  suma = 0;
  promedio = 0;
  estado = '';
  observacion = '';
  cargando = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private estudianteService: EstudianteService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.estudianteService.getEstudiantes().subscribe({
      next: (data) => {
        const encontrado = data.find(e => e.id === id);
        if (encontrado) {
          this.estudiante = encontrado;
          this.suma = this.estudianteService.calcularSuma(encontrado);
          this.promedio = this.estudianteService.calcularPromedio(encontrado);
          this.estado = this.estudianteService.obtenerEstado(encontrado);
          this.observacion = this.estudianteService.obtenerObservacion(encontrado);
        } else {
          this.error = 'Estudiante no encontrado';
        }
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'Error al cargar datos';
        this.cargando = false;
        console.error(err);
      }
    });
  }

  volver(): void {
    this.router.navigate(['/']);
  }
}