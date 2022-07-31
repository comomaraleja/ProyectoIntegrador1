import { AboutService } from './../../services/about.service';
import { TokenService } from './../../services/token.service';
import { About } from './../../model/about';

import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  persona: persona = new persona("","","");
  


  constructor(public personaService: PersonaService) { }



  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona=data}); 

   
  }

 /*modal (borrar en caso de que no funcione)
 public onOpenModal(mode: string): void {
  const container=document.getElementById('main-container');
  const button=document.createElement('button');
  button.style.display='none';
  button.setAttribute('data-toggle', 'modal');
  if(mode==='add'){
    button.setAttribute('data-target', '#addDescriptionModal');
  } else  if(mode === 'delete'){
    this.
  }

 }*/

  }




