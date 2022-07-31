import { Skills } from './../model/skills';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skURL='http://localhost:8080/skills/';

  constructor(private httpClient: HttpClient) { }
  
  //métodos
  
  public lista(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.skURL + 'lista');
  }

  public detail(id:number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.skURL + `detail/${id}`); //acá las comillas tienen que ir mirando hacia la izquierda, pues son para pasarle un valor por el PathVariable
  }

  public save(skills: Skills): Observable<any>{
    return this.httpClient.post<any>(this.skURL + 'create', skills);
  
  }

  public update (id: number, skills: Skills): Observable<any>{
    return this.httpClient.put<any>(this.skURL + `update/${id}`, skills);

  }

  public delete (id: number): Observable<any>{
    return this.httpClient.delete<any>(this.skURL + `delete/${id}`);
  }
}


