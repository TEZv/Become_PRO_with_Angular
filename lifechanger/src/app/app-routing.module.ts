import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from './projects/projects.component';
import { BiographyComponent } from './biography/biography.component';
import { StackComponent } from './stack/stack.component';


const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'home', component: HeroComponent },
  { path:'about', component: BiographyComponent},
  { path: 'tech-stack', component: StackComponent },
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
