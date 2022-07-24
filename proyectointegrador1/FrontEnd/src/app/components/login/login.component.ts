
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { TokenService } from './../../services/token.service';
import { LoginUsuario } from './../../model/login-usuario';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[]=[];
  errMsj!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;//si trae un token, significa que está loggeado
      this.isLogginFail = false; //Si estás loggeado, quiere decir que no falló el login
      this.roles = this.tokenService.getAuthorities(); //guardar en la variable roles, lo que se traiga del tokenService.getAuthorities
    }
  }

  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data =>{
    this.isLogged = true;
    this.isLogginFail = false; 
    this.tokenService.setToken(data.token);
    this.tokenService.setUserName(data.nombreUsuario);
    this.tokenService.setAuthorities(data.authorities);
    this.roles = data.authorities;
    this.router.navigate([''])//con esto le indico que vaya al index
    }, err =>{
      this.isLogged = false; 
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje();
      console.log(this.errMsj);
      
    })
  }
 
}
