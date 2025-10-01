import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { OpenWeatherService } from '../../service/open-weather.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { WeatherResponse } from '../../models/wheater-response.model';
import { catchError, of } from 'rxjs';
import { DecimalPipe, TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-clima',
  standalone: true,
  templateUrl: './clima.component.html',
  imports: [DecimalPipe, TitleCasePipe],
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent {

  navegador = inject(Router);
  openWeatherService = inject(OpenWeatherService);
  dadosClima = toSignal<WeatherResponse | null>(
    this.openWeatherService.buscarInfoClimaCidadeAtual()
    .pipe(
      catchError(err => {
        console.error('Erro ao buscar dados do clima:', err);
        return of(null);
      })
    ),
    { initialValue: null }
  );

  constructor() { }

  navegarParaTeladePesquisa() {
    this.navegador.navigate(['/pesquisa']);
  }


}

