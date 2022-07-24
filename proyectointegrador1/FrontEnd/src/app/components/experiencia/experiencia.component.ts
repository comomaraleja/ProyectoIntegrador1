import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: Experiencia[]=[];

  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService) { } //acá empezamos a valodar: si estás loggeado, se pueden hacer determinadas cosas, si no se está loggeado no. 

  isLogged = false;

  ngOnInit(): void {

    this.cargarExperiencia();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

  }

  //método para cargar experiencia
  cargarExperiencia():void{
    this.experienciaService.lista().subscribe(data=>{this.experiencia=data;}) 
  }

}
