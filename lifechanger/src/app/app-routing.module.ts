import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from './projects/projects.component';
import { BiographyComponent } from './biography/biography.component';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'home', component: HeroComponent },
  {path:'about', component:BiographyComponent},
  // The below names of the Components will be changed
  { path: 'tech-stack', component: HeroComponent },
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
