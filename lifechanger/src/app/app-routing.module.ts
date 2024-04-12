import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
<<<<<<< HEAD
import { ProjectsComponent } from './projects/projects.component';
=======
>>>>>>> ed4b66eaf65df4723b31e1c4dff0a9847498421f

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'home', component: HeroComponent },
  // The below names of the Components will be changed
  { path: 'about', component: HeroComponent },
  { path: 'tech-stack', component: HeroComponent },
<<<<<<< HEAD
  { path: 'projects', component: ProjectsComponent }
=======
  { path: 'projects', component: HeroComponent }
>>>>>>> ed4b66eaf65df4723b31e1c4dff0a9847498421f
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
