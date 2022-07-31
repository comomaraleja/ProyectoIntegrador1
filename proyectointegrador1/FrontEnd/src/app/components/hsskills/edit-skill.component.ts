import { ActivatedRoute, Router } from '@angular/router';
import { SkillsService } from './../../services/skills.service';
import { Skills } from './../../model/skills';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skills: Skills=null;

  constructor(
    private seSkills:SkillsService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void { const id = this.activatedRoute.snapshot.params['id'];
  this.seSkills.detail(id).subscribe(
    data =>{
      this.skills = data;
    }, err =>{
       alert("Error al editar");
       this.router.navigate(['']);
    }
  )
}

onUpdate(): void{
  const id = this.activatedRoute.snapshot.params['id'];
  this.seSkills.update(id, this.skills).subscribe(
    data => {
      this.router.navigate(['']);
    }, err => {
      alert("Hubo un error al editar el skill");
      this.router.navigate(['']);
    }
  )
}

}
