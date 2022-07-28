import { Experiencia } from '../model/experiencia';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  expURL = 'http:localhost:8080/explab/';

  constructor(private HttpClient: HttpClient) { }

  //métodos

  public lista(): Observable<Experiencia[]>{
    return this.HttpClient.get<Experiencia[]>(this.expURL+'lista');
  }

  public detail(id:number): Observable<Experiencia>{
    return this.HttpClient.get<Experiencia>(this.expURL+`detail/${id}`); //acá las comillas tienen que ir mirando hacia la izquierda, pues son para pasarle un valor por el PathVariable
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.HttpClient.post<any>(this.expURL+'create', experiencia);
  
  }

  public update (id: number, experiencia: Experiencia): Observable<any>{
    return this.HttpClient.put<any>(this.expURL+`update/${id}`, experiencia);

  }

  public delete (id: number): Observable<any>{
    return this.HttpClient.delete<any>(this.expURL+`delete/${id}`);
  }
}
