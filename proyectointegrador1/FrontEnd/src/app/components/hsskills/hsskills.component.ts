import { TokenService } from './../../services/token.service';
import { SkillsService } from './../../services/skills.service';
import { Skills } from './../../model/skills';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hsskills',
  templateUrl: './hsskills.component.html',
  styleUrls: ['./hsskills.component.css']
})
export class HsskillsComponent implements OnInit {
  ski:Skills[]=[];

  constructor(private seSkills: SkillsService, private tokenService:TokenService) { }
  isLogged = false;

  ngOnInit(): void {

    this.cargarSkills();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

  }

  //método para cargar experiencia
  cargarSkills():void{
    this.seSkills.lista().subscribe(data=>{this.ski=data;}) 
  }

  delete(id: number){
    if(id != undefined){
      this.seSkills.delete(id).subscribe(
        data=>{
          this.cargarSkills();
      }, err=>{
        alert("No se pudo borrar el skill");
      }
      )
    }
  }

}
