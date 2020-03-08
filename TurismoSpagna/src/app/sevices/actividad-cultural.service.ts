import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



const apiUrl = environment.apiUlr;
const apiagendaactividades = environment.apiagendaactividades;


@Injectable({
  providedIn: 'root'
})
export class ActividadCulturalService {


 
  latitud = '40.39164343238081';
  longitud= '-3.717140510927299';
  distancia = 100;

  constructor( private http: HttpClient) { }

  getActividades() {
    const UrlFinal = `${apiUrl}${apiagendaactividades}?latitud=${this.latitud}&longitud=${this.longitud}&distancia=${this.distancia}`;
    // tslint:disable-next-line: max-line-length
    return  this.http.get<RootObject>(UrlFinal);
  }

}
