import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';


@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {

  responsables: any[];
  actividad: any = {
    Responsable:{
      
    }
  };

  constructor(private crud:CrudService) { }

  ngOnInit() {
    this.getResponsables();
  }

  getResponsables(){
    this.crud.get('responsable','').toPromise()
      .then((response:any) => {
        this.responsables = response;
      })
      .catch(error => {
        this.responsables = null;
        console.log(error);
        alert('Ocurrio un error');
      });
  }


}
