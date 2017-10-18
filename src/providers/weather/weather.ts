import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {

  apikey = 'f6548b1acd43451ea7f14253171810';
  url = '';

  constructor(public http: Http) {
    this.url = 'http://api.apixu.com/v1/current.json?key=' + this.apikey + '&q=';
  }

  getWeather(city) {
    return this.http.get(this.url + city)
        .map(res => res.json());
  }

}
