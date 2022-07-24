import { JwtDto } from './../model/jwt-dto';
import { LoginUsuario } from './../model/login-usuario';
import { Observable } from 'rxjs';
import { NuevoUsuario } from './../model/nuevo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'http://localhost:8080/auth/';//EntryPoint de la parte del backend


  constructor(private HttpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.HttpClient.post<any>(this.authURL+'nuevo', nuevoUsuario);

  }

  public login (loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.HttpClient.post<JwtDto>(this.authURL+'login', loginUsuario);
  }
}
