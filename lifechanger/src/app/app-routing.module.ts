import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  { path: 'home', component: HeroComponent },
  // The below names of the Components will be changed
  { path: 'about', component: HeroComponent },
  { path: 'tech-stack', component: HeroComponent },
  { path: 'projects', component: HeroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
