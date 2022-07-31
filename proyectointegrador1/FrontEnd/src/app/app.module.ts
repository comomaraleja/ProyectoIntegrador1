import { interceptorProvider } from './services/interceptor-service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoapComponent } from './components/logoap/logoap.component';

import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HttpClientModule} from '@angular/common/http';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';

//Circle progress//

import { NgCircleProgressModule } from 'ng-circle-progress';
import { HsskillsComponent } from './components/hsskills/hsskills.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewProyectoComponent } from './components/projects/new-proyecto.component';
import { EditProyectoComponent } from './components/projects/edit-proyecto.component';
import { NuevoSkillComponent } from './components/hsskills/nuevo-skill.component';
import { EditSkillComponent } from './components/hsskills/edit-skill.component';










@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoapComponent,
   
    BannerComponent,
    AboutComponent,
    ExperienciaComponent,
    EducacionComponent,
    HsskillsComponent,
    
    ProjectsComponent,
         FooterComponent,
         HomeComponent,
         LoginComponent,
         NewExperienciaComponent,
         EditExperienciaComponent,
         NewEducacionComponent,
         EditEducacionComponent,
         NewProyectoComponent,
         EditProyectoComponent,
         NuevoSkillComponent,
         EditSkillComponent,
         
       

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    

    //especificacion de modulo httpClient//    
    HttpClientModule,
    //import circle progress//
    NgCircleProgressModule.forRoot({})

  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
