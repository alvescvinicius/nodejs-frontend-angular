import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/interfaces/weather.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent implements OnInit {

  // ! - pq possivelmente sera inciado como nulo / indefined
  @Input() weatherDatasInput!: Weather;

  ngOnInit(): void {
    console.log('DADOS RECEBIDOS DO COMPONENTE PAI - WEATHER-CARD: ',
      this.weatherDatasInput);
  }

}
