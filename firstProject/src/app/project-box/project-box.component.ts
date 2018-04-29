import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-box',
  templateUrl: './project-box.component.html',
  styleUrls: ['./project-box.component.css']
})
export class ProjectBoxComponent implements OnInit {
	heading = "heading"
	hideDetails = true;
  skills : String[] = ['Java','HTML','CSS']
  constructor() { }

  ngOnInit() {
  }

  headingClicked(){
  	this.hideDetails  = !this.hideDetails;
  }

}
