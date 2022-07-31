import { EditSkillComponent } from './components/hsskills/edit-skill.component';
import { NuevoSkillComponent } from './components/hsskills/nuevo-skill.component';
import { EditProyectoComponent } from './components/projects/edit-proyecto.component';
import { NewProyectoComponent } from './components/projects/new-proyecto.component';


import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NewEducacionComponent},
  {path:'editedu/:id', component: EditEducacionComponent},
  {path:'nuevoproy', component: NewProyectoComponent},
  {path:'editproy/:id', component:EditProyectoComponent},
  {path:'nuevoskill', component:NuevoSkillComponent},
  {path:'editskill/:id', component:EditSkillComponent}
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
