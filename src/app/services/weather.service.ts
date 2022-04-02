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
}
