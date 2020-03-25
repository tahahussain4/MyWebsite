var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';
let ProjectsPageComponent = class ProjectsPageComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.pArray = [];
        this.heading = "Projects";
        this.taxiHeading = "Car Booking App";
        this.taxiSkills = ['javaEE', 'java servlets', 'Tomcat', 'log4j', 'html/css/js'];
        this.taxiDescription = "This was a solo project I worked on when I was " +
            "learning java and about making full stack applicaiton. I worked on " +
            "the back end as well as the front end. The motivaiton for this porject " +
            "was thought of from ideas such as UBER and other taxi services but instead " +
            "of immediate repsonse ,this allowed you to book your taxis in advance leading " +
            "to more organized travels . In addition it allowed the admin as well as the drivers " +
            "to have an interface to help users with their booking as well as keep track of their schedule. ";
        this.vwHeading = "Vitual WhiteBoard";
        this.vwSkills = ['javaEE', 'Spring Core', 'Websockets', 'Server sent events', 'html/css/js'];
        this.vwDescription = "Virtual White Board is a place where people can calloborate through realtime drawings and text where " +
            "everyone had the ability to contribute at the same time. It was also a place where users can manage what projects there are involved in . " +
            "This was made in  a group of 10 people in a short time period of two weeks to produce a fully working product for presentation. " +
            "I worked in the overall design of the DB , commuinication of FE and BE thorugh server sent events and aided in the developement of " +
            "the Front End applicaiton.";
        this.fbHeading = "Foosball Machine";
        this.fbSkills = ['C++', 'Arduino', 'Engineering Design'];
        this.fbDescription = "Foosball Machine be awesome!!!";
        const observable = this.projectService.getProjects();
        observable.subscribe((data) => {
            let dataArray = data;
            dataArray.forEach((item) => {
                this.pArray.push(item);
            });
            console.log("parray" + this.pArray);
            console.log(this.pArray[0].name);
        });
    }
    ngOnInit() {
    }
};
ProjectsPageComponent = __decorate([
    Component({
        selector: 'app-projects-page',
        templateUrl: './projects-page.component.html',
        styleUrls: ['./projects-page.component.css']
    }),
    __metadata("design:paramtypes", [ProjectService])
], ProjectsPageComponent);
export { ProjectsPageComponent };
//# sourceMappingURL=projects-page.component.js.map