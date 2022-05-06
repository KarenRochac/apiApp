/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResposta } from '../models/IResposta.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url='https://api.hgbrasil.com/weather?format=json-cors&woeid=457479';

  constructor(private http: HttpClient) { }

 buscarPrevisao(): Observable<IResposta>{
  return this.http.get<IResposta>(this.url);

 }

 buscarIcone(slug: string) {
    const icones = {
      storm : 'thunderstorm-outline',
      snow : 'snow-outline',
      hail : 'snow-outline',
      rain : 'rainy-outline',
      fog : 'cloundy-outline',
      clear_day: 'sunny-outline',
      clear_night : 'moon-outline',
      cloud : 'partly-sunny-outline',
      cloudly_day : 'partly-sunny-outline',
      cloudly_night : 'cloundy-night-outline',
      none_day : 'sunny-outline',
      none_night : 'moon-outline',
 };
 return icones[slug];
}
}
