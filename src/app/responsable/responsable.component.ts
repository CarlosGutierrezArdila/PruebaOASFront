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
  borrarResponsable(id){
    this.crud.delete("/responsable/"+id,"").subscribe((data)=>{
      console.log(data);
      this.getResponsables();
    })
}
actualizarResponsable(id,nombres, apellidos,email,telefono){
  console.log("actualizando responsable")
  if(id && nombres && apellidos && email && telefono){
    let params={"Id":id,"Nombres":nombres,"Apellidos":apellidos,"Email":email,"Telefono":telefono}
    console.log(params);
    this.crud.update("/responsable/"+id,params).subscribe((data)=>{
      console.log(data);
      this.getResponsables();
    });
  }else{
    alert("formulario incompleto");
  }

}

}
