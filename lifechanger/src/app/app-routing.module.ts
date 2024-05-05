import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from './projects/projects.component';
import { BiographyComponent } from './biography/biography.component';
import { StackComponent } from './stack/stack.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'home', component: HeroComponent },
  { path:'about', component: BiographyComponent},
  { path: 'tech-stack', component: StackComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
