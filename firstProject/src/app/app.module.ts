import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LoginComponent } from './login/login.component';
import {GetUsersService} from './get-users.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavUnitComponent } from './nav-unit/nav-unit.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { WorkExperiencePageComponent } from './work-experience-page/work-experience-page.component';
import { HeaderPartComponent } from './header-part/header-part.component';
import { CustomParagraphComponent } from './custom-paragraph/custom-paragraph.component';
import {Routes} from '@angular/router';
import { CustomLinkComponent } from './custom-link/custom-link.component';
import { ProjectBoxComponent } from './project-box/project-box.component';
import { TriangleComponent } from './triangle/triangle.component'

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
    TriangleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [GetUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
