import { Weather } from 'src/app/models/interfaces/weather.interface';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit, OnDestroy {

  // Evitar memory leak
  private readonly destroy$: Subject<void> = new Subject();

  initialCityName = 'Rio De Janeiro';
  weatherDatas!: Weather;
  searchIcon = faMagnifyingGlass;

  // Servico sendo injetado nessa  (o service esta assinado com @Injectable)
  constructor(private weatherService: WeatherService ){ }

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {
        response && (this.weatherDatas = response);
        console.log(this.weatherDatas);
      },
      error:(error) => console.log(error),
    });

  }

  onSubmit(): void {
    this.getWeatherDatas(this.initialCityName);
    this.initialCityName = '';
  }

  // OnDestroy sempre no final da pagina
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
