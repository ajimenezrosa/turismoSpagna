import { Component, OnInit } from '@angular/core';
import { ActividadCulturalService } from '../../sevices/actividad-cultural.service';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit  {


  constructor(private actividadesCulturales: ActividadCulturalService) {}


ngOnInit() {
  this.actividadesCulturales.getActividades()
        .subscribe( resp => {
            console.log( 'Actividades', resp );
        });
}

}
