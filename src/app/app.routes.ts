import { Routes } from '@angular/router';
import { ListaEstudiantesComponent } from './components/lista-estudiantes/lista-estudiantes.component';
import { DetalleEstudianteComponent } from './components/detalle-estudiante/detalle-estudiante.component';

export const routes: Routes = [
  { path: '', component: ListaEstudiantesComponent },
  { path: 'detalle/:id', component: DetalleEstudianteComponent },
  { path: '**', redirectTo: '' }
];