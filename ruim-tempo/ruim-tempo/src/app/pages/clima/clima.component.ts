import { Component, inject, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { OpenWeather } from '../../service/open-weather.service';


@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {

  navegador = inject(Router);
  openWeatherService = inject(OpenWeather);

  constructor() { }

  ngOnInit() {
    this.openWeatherService.buscarInfoClimaCidadeAtual();
  }

  navegarParaTeladePesquisa() {
    this.navegador.navigate(['/pesquisa']);
  }


}

