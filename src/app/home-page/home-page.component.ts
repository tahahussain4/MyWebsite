declare var colorUtils : any;

import { Component, OnInit,Input } from '@angular/core';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  heading  = "AboutMe";

  projectLink = "/projects"; 
  projectLinkName = "projects";

  skillsLink = "/skills";
  skillsLinkName = "skills";

  workLink = "/work";
  workLinkName = 'work experience';
  colorPallette ={
    lightestColor : "",
    lighterColor : "",
    mediumColor : "",
    darkerColor : "",
    darkestColor : ""

  }


  @Input() color : string;
  constructor() { }

  ngOnInit() {

  }

}
