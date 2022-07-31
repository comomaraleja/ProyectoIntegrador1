import { About } from './../model/about';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  aboutURL ='http://localhost:8080/about/'

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<About[]>{
    return this.httpClient.get<About[]>(this.aboutURL + 'lista');
  }

  public detail(id:number): Observable<About>{
    return this.httpClient.get<About>(this.aboutURL + `detail/${id}`); //acá las comillas tienen que ir mirando hacia la izquierda, pues son para pasarle un valor por el PathVariable
  }

  public save(about: About): Observable<any>{
    return this.httpClient.post<any>(this.aboutURL + 'create', about);
  
  }

  public update (id: number, about: About): Observable<any>{
    return this.httpClient.put<any>(this.aboutURL + `update/${id}`, about);

  }

  public delete (id: number): Observable<any>{
    return this.httpClient.delete<any>(this.aboutURL + `delete/${id}`);
  }
}
