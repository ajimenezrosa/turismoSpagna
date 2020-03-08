import { Component, OnInit } from '@angular/core';
import { ActividadCulturalService } from '../../sevices/actividad-cultural.service';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit  {
  actividades: RootObject[];
  Resultado: Graph[];
  todos: Graph[];
  constructor(private actividadesCulturales: ActividadCulturalService) {}


ngOnInit() {
        this.cargarnotificaciones();
 }


 cargarnotificaciones() {
 this.actividadesCulturales.getActividades()
  .subscribe( resp => {
    this.Resultado = resp['@graph'];
        // console.log(this.todos);

  });



   // console.log(this.Resultado);
}



}
