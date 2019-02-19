import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url: string = "http://127.0.0.1:8080/v1/";
  httpOptions: any = {
    headers: new HttpHeaders({
        'Accept': 'application/json',
        'content-type': 'application/json'
    }),
  }

  constructor(private http:HttpClient) { }

    get(tabla,parametro){
      return this.http.get(this.url+tabla+parametro,this.httpOptions);
    }
    post(tabla,object){
      return this.http.post(this.url+tabla,object,this.httpOptions);
    }
    delete(tabla,parametro){
      return this.http.delete(this.url+tabla,this.httpOptions);
    }
    update(tabla,parametro){
      return this.http.put(this.url+tabla,parametro,this.httpOptions);
    }

}
