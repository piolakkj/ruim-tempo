import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenWeather {
  
  apiKey = 'c65be6a1c98984a5c0e3a36335974786';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor() { }

  buscarInfoClimaCidadeAtual () {
    const urlCompleta = this.apiUrl +"?q=Dois%20Vizinhos&appid="+this.apiKey+"&lang=pt_br&units=metrics";
    console.log(urlCompleta);
  }
}
// https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c65be6a1c98984a5c0e3a36335974786
// https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c65be6a1c98984a5c0e3a36335974786