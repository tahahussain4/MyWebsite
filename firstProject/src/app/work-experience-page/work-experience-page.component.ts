import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience-page',
  templateUrl: './work-experience-page.component.html',
  styleUrls: ['./work-experience-page.component.css']
})
export class WorkExperiencePageComponent implements OnInit {
  heading = "Work Experience";

  intactDescription ="";
  hsbcDescription = "";
  MARCDescription = "";

  intactExperience = new WorkExperienceObject(
  		"Intact",
  		"Software Developer",
  		"2017",
  		"current",
  		new Address("700 University Avenue","Toronto","ON","Canada"),
  		this.intactDescription,
  		["Java","Html","Spring","Testing"]
  	)

    hsbcExperience = new WorkExperienceObject(
  		"Intact",
  		"Software Developer",
  		"2017",
  		"current",
  		new Address("700 University Avenue","Toronto","ON","Canada"),
  		this.intactDescription,
  		["Java","Html","Spring","Testing"]
  	)

  workExperiences = [this.intactExperience,this.hsbcExperience];

  constructor() { }

  ngOnInit() {
  }

}

class WorkExperienceObject{

	workName : String;
	workAddress : Address;
	workDescription : String;
	skillsDeveloped : String[];
	role : String;
	yearFrom : Number;
	yearTo : Number;

	constructor(
		workName : String,
		role:String,
		yearFrom : String,
		yearTo: String,
		workAdress :Address,
		workDescription : String,
		skillsDeveloped : String[]
		){
		this.workName = workName;
		this.workAddress = workAdress;
		this.workDescription = workDescription;
		this.skillsDeveloped = skillsDeveloped;
		this.role = role;
		this.yearFrom = yearFrom;
		this.yearTo = yearTo;
	}
}

class Address{
	street :String;
	city : String;
	province : String;
	country : String;

	constructor(
		street : String,
		city : String,
		province: String,
		country : String
		){
		this.street = street;
		this.city = city;
		this.province = province;
		this.country = country;
	}
}