import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosService } from './../../services/proyectos.service';
import { Proyectos } from './../../model/proyectos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyectos: Proyectos=null;

  constructor(
    private sProyectos: ProyectosService, 
    private activatedRoute:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sProyectos.detail(id).subscribe(
      data =>{
        this.proyectos = data;
      }, err =>{
         alert("Error al editar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sProyectos.update(id, this.proyectos).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Hubo un error al editar la educacion");
        this.router.navigate(['']);
      }
    )
  }
}