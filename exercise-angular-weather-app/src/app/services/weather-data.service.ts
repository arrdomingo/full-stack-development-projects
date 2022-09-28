import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

              //inject HttpClient service in the constructor. Once injected, 
              //http call to an external API is now possible                  
  constructor(private http: HttpClient) { }

  // public cityname = '';

  // GetWeatherData() {
  GetWeatherDataFromCity(cityname: string) {
                    //.get is an Observable. Observable is an object that needs to subscribe
                    // .subscribe is in main.component.ts
    // return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=Edmonton&appid=8e0542bd7470ff41c8371defc854d83f`);
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=8e0542bd7470ff41c8371defc854d83f`);
    
  }


}
