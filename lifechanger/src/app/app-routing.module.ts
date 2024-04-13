import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { StackComponent } from './stack/stack.component';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'home', component: HeroComponent },
  {path:'about', component:BiographyComponent},
  { path: 'about', component: HeroComponent },
  { path: 'tech-stack', component: StackComponent },
  { path: 'projects', component: HeroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
