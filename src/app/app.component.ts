import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <nav class="navbar navbar-dark bg-primary shadow-sm mb-4">
      <div class="container">
        <span class="navbar-brand mb-0 h1">
          <i class="bi bi-mortarboard-fill me-2"></i>
          Reporte de Estudiantes - jsdejuan
        </span>
      </div>
    </nav>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}