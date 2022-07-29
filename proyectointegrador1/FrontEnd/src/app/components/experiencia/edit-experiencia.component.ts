import { ExperienciaService } from 'src/app/services/experiencia.service';

import { Experiencia } from './../../model/experiencia';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
 expLab: Experiencia = null;
 
  constructor(private sExperienciaService: ExperienciaService, private activatedRouter: ActivatedRoute,  private router: Router){ }

  ngOnInit(): void {
    //captura el id de la expereinecia que queremos modificar
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperienciaService.detail(id).subscribe(
      data =>{
        this.expLab = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    //busca por id el metodo que tiene que editar
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperienciaService.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar experiencia");
         this.router.navigate(['']);
      }
    )
  }

}

