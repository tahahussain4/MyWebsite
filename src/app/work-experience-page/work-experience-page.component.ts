import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience-page',
  templateUrl: './work-experience-page.component.html',
  styleUrls: ['./work-experience-page.component.css']
})
export class WorkExperiencePageComponent implements OnInit {
  heading = "Work Experience";

  intactDescription =`I started work at intact insuarnce as part of my FDM contract in the ECM team 
  which manages two main application used by the company as well as ECM (Enterprise content management)  itself.
  Through production support I vastly improved my coding skills as well as code comprehension. I was aquainted with different technologies 
  which were mainly based on Spring , Spring flows and Java Server Faces being two new ones I learnt. 
  It helped me build my team inter-team skills as I was constantly coordinating with different groups to help provide users 
  with the best service that our application had to offer thorugh coordinating releases and helping with process . 
  In addiiton to that I got opptunities to work in two projects
  1) Data Destruction Project : Involved learning and working with IBM's ECM APIs to retrieve data,
  generate excel sheets and destroying the data in those reveiwed sheets. 
  2) Data Migration projects : Involved learning and writing DOS scritps to automate the ingesting data process`;


  hsbcDescription = "bla bla";
  MARCDescription = "";

  intactExperience = new WorkExperienceObject(
  		"Intact",
  		"Software Developer",
  		"2017 November",
  		"Current Day",
  		new Address("700 University Avenue","Toronto","ON","Canada","M5G 0A1"),
  		this.intactDescription,
  		["Java","HTML","Spring","Testing","Prod Support","Websphere","SVN","Git","Apache POI"]

  	)

    hsbcExperience = new WorkExperienceObject(
  		"HSBC",
  		"Software Developer",
  		"2016 Novmber",
  		"2017 May",
  		new Address("2910 Virtual Way Drive","Vancouver","BC","Canada","V5M 0B2"),
  		this.intactDescription,
  		["RPG","SDLC","AS400"]
  	)

    marcExperience = new WorkExperienceObject(
  		"MARC",
  		"Research Assistant",
  		"2015 May",
  		"2015 September",
  		new Address("270 Lonwood Rd. South","Hamilton","ON","Canada","L8P 0A6"),
  		this.intactDescription,
  		["C","MicrControllers","CAN Bus","Canoe testing"]
  	)
  workExperiences = [this.intactExperience,this.hsbcExperience,this.marcExperience];

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
	yearFrom : String;
	yearTo : String;

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
	poBox : String;
	constructor(
		street : String,
		city : String,
		province: String,
		country : String,
		poBox : String
		){
		this.street = street;
		this.city = city;
		this.province = province;
		this.country = country;
		this.poBox = poBox;
	}
}