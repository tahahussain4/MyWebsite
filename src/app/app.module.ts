import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './pageComponents/navigation-bar/navigation-bar.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavUnitComponent } from './pageComponents/nav-unit/nav-unit.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { WorkExperiencePageComponent } from './pages/work-experience-page/work-experience-page.component';
import { HeaderPartComponent } from './pageComponents/header-part/header-part.component';
import { CustomParagraphComponent } from './htmlComponentsWrappers/custom-paragraph/custom-paragraph.component';
import {Routes} from '@angular/router';
import { CustomLinkComponent } from './htmlComponentsWrappers/custom-link/custom-link.component';
import { ProjectBoxComponent } from './pageComponents/project-box/project-box.component';
import { TriangleComponent } from './pageComponents/triangle/triangle.component';
import { SocialMediaComponent } from './pageComponents/social-media/social-media.component'
import {ProjectService} from './services/project.service';
import { HttpClientModule } from '@angular/common/http'; 

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'skills', component: SkillsPageComponent },
  { path: 'work', component: WorkExperiencePageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LoginComponent,
    NavUnitComponent,
    HomePageComponent,
    SkillsPageComponent,
    ProjectsPageComponent,
    WorkExperiencePageComponent,
    HeaderPartComponent,
    CustomParagraphComponent,
    CustomLinkComponent,
    ProjectBoxComponent,
    TriangleComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
