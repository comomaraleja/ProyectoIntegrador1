import { TokenService } from './../../services/token.service';
import { EducacionService } from './../../services/educacion.service';
import { Educacion } from './../../model/educacion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[]=[]

  constructor(private eduServ: EducacionService, private tokenService:TokenService) { } 
  isLogged=false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  cargarEducacion():void {
    this.eduServ.lista().subscribe(
      data=>{
        this.educacion = data;
      }
    )
  }

  delete(id?:number){
    if(id != undefined){
      this.eduServ.delete(id).subscribe(
        data=>{
          this.cargarEducacion();
        }, err=>{
          alert("Error al eliminar")
        }
      )
        
    }
  }

}
