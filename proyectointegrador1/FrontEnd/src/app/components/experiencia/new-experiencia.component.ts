import { ExperienciaService } from 'src/app/services/experiencia.service';

import { Experiencia } from './../../model/experiencia';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreExp: string = '';
  descripcionExp: string = '';

  constructor(private sExperiencia: ExperienciaService, private router: Router) { }//acá en el constructor traemos el service
  //traemos tambien el router porque cuando usemos el botón nos tiene que redirigir a ese componente

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreExp, this.descripcionExp);
    this.sExperiencia.save(expe).subscribe(
      data=>{
        alert("Experiencia Añadida");
        this.router.navigate(['']);
  }, err =>{
    alert("Falló al cargar experiencia");
    this.router.navigate(['']);
  }
    )
  }

}
