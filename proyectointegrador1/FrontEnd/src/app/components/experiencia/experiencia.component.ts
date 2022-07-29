import { Experiencia } from './../../model/experiencia';
import { ExperienciaService } from '../../services/experiencia.service';
import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[]=[];

  constructor(private sExperiencia: ExperienciaService, private tokenService: TokenService) { } //acá empezamos a valodar: si estás loggeado, se pueden hacer determinadas cosas, si no se está loggeado no. 

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
    this.sExperiencia.lista().subscribe(data=>{this.expe=data;}) 
  }

  delete(id: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data=>{
          this.cargarExperiencia();
      }, err=>{
        alert("No se pudo borrar la experiencia");
      }
      )
    }
  }
}