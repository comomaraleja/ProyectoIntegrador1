import { Skills } from './../../model/skills';
import { Router } from '@angular/router';
import { SkillsService } from './../../services/skills.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-skill',
  templateUrl: './nuevo-skill.component.html',
  styleUrls: ['./nuevo-skill.component.css']
})
export class NuevoSkillComponent implements OnInit {
  nameSkill:string='';
  percentSkill:string='';

  constructor(private seSkill:SkillsService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const ski = new Skills(this.nameSkill, this.percentSkill);
    this.seSkill.save(ski).subscribe(
      data=>{
        alert("Skill añadido");
        this.router.navigate(['']);
  }, err =>{
    alert("Falló al cargar skill");
    this.router.navigate(['']);
  }
    )
  }

}
