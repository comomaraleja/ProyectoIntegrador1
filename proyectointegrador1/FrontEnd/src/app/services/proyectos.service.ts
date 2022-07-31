import { Observable } from 'rxjs';
import { Proyectos } from './../model/proyectos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  proURL='http://localhost:8080/proyectos/';

  constructor(private httpClient: HttpClient) { }


  //métodos
  
  public lista(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.proURL + 'lista');
  }

  public detail(id:number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.proURL + `detail/${id}`); //acá las comillas tienen que ir mirando hacia la izquierda, pues son para pasarle un valor por el PathVariable
  }

  public save(proyectos: Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.proURL + 'create', proyectos);
  
  }

  public update (id: number, proyectos: Proyectos): Observable<any>{
    return this.httpClient.put<any>(this.proURL + `update/${id}`, proyectos);

  }

  public delete (id: number): Observable<any>{
    return this.httpClient.delete<any>(this.proURL + `delete/${id}`);
  }
}
