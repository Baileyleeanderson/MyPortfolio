import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'resume', component: ResumeComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'education', component: EducationComponent},
  { path: 'aboutme', component: AboutmeComponent},
  // { path: 'edit/:id', component: EditComponent},
  // { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '**', component:  PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
