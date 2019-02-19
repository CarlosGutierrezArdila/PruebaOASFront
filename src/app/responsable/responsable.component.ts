import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-responsable',
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.css']
})
export class ResponsableComponent implements OnInit {

  responsable : any = {};
  responsables: any[];
  cargandoResponsables: boolean = false;

  constructor(private crud:CrudService) { }

  ngOnInit() {
    this.getResponsables();
  }

  getResponsables(){
    this.cargandoResponsables = true;
    this.crud.get('responsable','').toPromise()
      .then((response:any) => {
        this.cargandoResponsables = false;
        this.responsables = response;
      })
      .catch(error => {
        this.cargandoResponsables = false;
        this.responsables = null;
        console.log(error);
        alert('Ocurrio un error');
      });
  }

  agregarResponsable(){
    if (this.responsable.Id && this.responsable.Nombres && this.responsable.Apellidos && this.responsable.Email && this.responsable.Telefono) {
      this.crud.post('responsable',this.responsable).subscribe((data)=>{
        console.log(data);
        this.getResponsables();
      });
    } else {
      alert("Formulario incompleto");
    }
  }

}
