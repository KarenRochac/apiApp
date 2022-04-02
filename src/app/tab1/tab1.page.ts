import { IResposta } from './../models/IResposta.model';
import { WeatherService } from './../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  previsao: IResposta;

  constructor(public weatherService: WeatherService) {}

  ngOnInit(): void {
    this.buscarPrevisao();
   }

  /** @response: dados da previsao do tempo */

  buscarPrevisao(){
    this.weatherService.buscarPrevisao().subscribe(respostaVeia => {
      this.previsao = respostaVeia;
      console.log(respostaVeia.results.city_name);
    });
  }

}
