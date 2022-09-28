import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css']
})
export class WeatherMainComponent implements OnInit {

              //inject the WeatherDataService in the constructor and store it in variable weatherData
  constructor(private weatherData: WeatherDataService) { }

  //TO DISPLAY THE CONTENT IN A WEBPAGE!!!!!

  // public cityname:string = '';

  public cities: any; //any is a collection of objects

  GetWeatherData(cityname:string) {
    this.weatherData.GetWeatherDataFromCity(cityname).subscribe(data => {
      console.log(data);
      this.cities = data;
    }
    );
    
    //TO DISPLAY THE CONTENT IN A WEBPAGE!!!!!
    //this.weatherData.GetWeatherDataFromCity(this.cityname).subscribe(data => this.cities = data);
  }

  ngOnInit(): void {


  }

}
