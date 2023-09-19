import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit {

  initialCityName = 'Rio De Janeiro';

  // Servico sendo injetado nessa  (o service esta assinado com @Injectable)
  constructor(private weatherService: WeatherService ){ }

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName)
    .subscribe({
      next: (response) => {
        console.log(response);
      },
      error:(error) => console.log(error),
    })
  }
}
