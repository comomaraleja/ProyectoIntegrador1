import { TokenService } from './../../services/token.service';
import { ProyectosService } from './../../services/proyectos.service';
import { Proyectos } from './../../model/proyectos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  proy: Proyectos[]=[];

  constructor(private sProyectos:ProyectosService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

  }

  //método para cargar experiencia
  cargarProyectos():void{
    this.sProyectos.lista().subscribe(data=>{this.proy=data;}) 
  }

  delete(id: number){
    if(id != undefined){
      this.sProyectos.delete(id).subscribe(
        data=>{
          this.cargarProyectos();
      }, err=>{
        alert("No se pudo borrar el proyecto");
      }
      )
    }
  }


}
