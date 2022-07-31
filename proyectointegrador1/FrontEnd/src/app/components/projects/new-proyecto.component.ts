import { Proyectos } from './../../model/proyectos';
import { Router } from '@angular/router';
import { ProyectosService } from './../../services/proyectos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombrePro:string;
  descripcionPro: string;
  imgPro: string; 

  constructor(private sProyectos:ProyectosService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proy = new Proyectos(this.nombrePro, this.descripcionPro, this.imgPro);
    this.sProyectos.save(proy).subscribe(
      data=>{
        alert("Proyecto Añadido");
        this.router.navigate(['']);
  }, err =>{
        alert("Falló al cargar el proyecto");
        this.router.navigate(['']);
  }
    )
  }
}
