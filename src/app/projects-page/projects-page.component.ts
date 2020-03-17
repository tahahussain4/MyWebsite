import { Component, OnInit } from '@angular/core';
import {Project} from '../model/Project';
import { ProjectService } from '../services/project.service';
@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {
  pArray : Project[];

  heading = "Projects"
	  
	taxiHeading = "Car Booking App"
	taxiSkills = ['javaEE','java servlets','Tomcat','log4j','html/css/js']
	taxiDescription = "This was a solo project I worked on when I was " +
	"learning java and about making full stack applicaiton. I worked on " +
	"the back end as well as the front end. The motivaiton for this porject " + 
	"was thought of from ideas such as UBER and other taxi services but instead " + 
	"of immediate repsonse ,this allowed you to book your taxis in advance leading " +
	"to more organized travels . In addition it allowed the admin as well as the drivers " +
	"to have an interface to help users with their booking as well as keep track of their schedule. "

	vwHeading = "Vitual WhiteBoard";
	vwSkills = ['javaEE','Spring Core','Websockets','Server sent events','html/css/js'];
	vwDescription = "Virtual White Board is a place where people can calloborate through realtime drawings and text where "+
	"everyone had the ability to contribute at the same time. It was also a place where users can manage what projects there are involved in . "+
	"This was made in  a group of 10 people in a short time period of two weeks to produce a fully working product for presentation. " +
	"I worked in the overall design of the DB , commuinication of FE and BE thorugh server sent events and aided in the developement of "+
	"the Front End applicaiton.";

	fbHeading = "Foosball Machine";
	fbSkills = ['C++','Arduino','Engineering Design']
	fbDescription = "Foosball Machine be awesome!!!"

  constructor(private projectService : ProjectService) { }

  ngOnInit() {
  	this.pArray = this.projectService.getProjects();
  	console.log(this.pArray)
  }

}
