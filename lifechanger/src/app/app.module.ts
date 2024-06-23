import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { BiographyComponent } from './biography/biography.component';
import { ExperienceInfoComponent } from './experience-info/experience-info.component';
import { StackComponent } from './stack/stack.component';
import { BlogComponent } from './blog/blog.component';
import { BlogCardComponent } from './blog/blog-card/blog-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalFormComponent } from './footer/modal-form/modal-form.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    ProjectsComponent,
    ProjectCardComponent,
    BiographyComponent,
    ExperienceInfoComponent,
    StackComponent,
    BlogComponent,
    BlogCardComponent,
    ModalFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
