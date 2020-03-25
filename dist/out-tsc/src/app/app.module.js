var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LoginComponent } from './login/login.component';
import { GetUsersService } from './get-users.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavUnitComponent } from './nav-unit/nav-unit.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { WorkExperiencePageComponent } from './work-experience-page/work-experience-page.component';
import { HeaderPartComponent } from './header-part/header-part.component';
import { CustomParagraphComponent } from './custom-paragraph/custom-paragraph.component';
import { CustomLinkComponent } from './custom-link/custom-link.component';
import { ProjectBoxComponent } from './project-box/project-box.component';
import { TriangleComponent } from './triangle/triangle.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { ProjectService } from './services/project.service';
import { HttpClientModule } from '@angular/common/http';
const routes = [
    { path: '', component: HomePageComponent },
    { path: 'projects', component: ProjectsPageComponent },
    { path: 'skills', component: SkillsPageComponent },
    { path: 'work', component: WorkExperiencePageComponent }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
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
            RouterModule.forRoot(routes)
        ],
        providers: [GetUsersService, ProjectService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map