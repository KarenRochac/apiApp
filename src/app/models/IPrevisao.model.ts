import { IForecast } from './IForecast.model';
/* eslint-disable @typescript-eslint/naming-convention */
export interface IPrevisao{
  cid: any;
  city: string;
  city_name: string;
  condition_code: string;
  condition_slug: string;
  currently: string;
  date: string;
  description: string;
  forecast: IForecast[];
  humidity: number;
  img_id: string;
  sunrise: string;
  sunset: string;
  temp: number;
  time: string;
  wind_speedy: string;
}
