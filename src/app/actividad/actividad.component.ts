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
    IdResponsable:{
      
    }
  };
  actividades: any[];

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

  getActividades(){
    this.crud.get("/actividad/","").subscribe((data) =>  {
      this.actividad=data;  
      console.log(this.actividades)
    });
}

  agregarActividad(){
    console.log(this.actividad);
    if (this.actividad.Id && this.actividad.FechaCreacion &&
       this.actividad.FechaLimite && this.actividad.IdResponsable&& 
       this.actividad.Descripcion&&
        this.actividad.Estado ) {
      this.crud.post('actividad',this.actividad).subscribe((data)=>{
        console.log(data);
      });
    } else {
      alert("Formulario incompleto");
    }
    
}


}
