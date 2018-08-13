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
  which were mainly based on Spring , Spring flow and Java Server Faces being two new ones I learnt. 
  It helped me build my team inter-team skills as I was constantly coordinating with different groups to help provide users 
  with the best service that our application had to offer thorugh coordinating releases and helping with process . 
  In addiiton to that I got opptunities to work in two projects
  1) Data Destruction Project : Involved learning and working with IBM's ECM APIs to retrieve data,
  generate excel sheets and destroying the data in those reveiwed sheets. 
  2) Data Migration projects : Involved learning and writing DOS scritps to automate the ingesting data process`;


      

  hsbcDescription = `I started at HSBC as part of my FDM contract . I worked on their term deposit project which 
  focused on enhacing the exisitng applicaitons. The focus and motivation of the project was centralizing code that was used
  for mutiple products to improve code maintainlibity as well as provide front end users a more central interface to manipulate 
  the products. I learned to work on the AS400 in this short time and learned to code in RPG , a language specific to this 
  platform. It was a continuous learning process in this role which I thoroughly enjoyed and had a successful end to the project`;

  MARCDescription = `MARC (McMaster automotive resource centre) was a coop expereince that I took under my professor at the time.
  The position invloved helping grad students with their research in topics. I was given the reposibility of setting up the test
  becnh and writing C code to simulate the process that they were trying to research . The main aim was to simulate the CAN network used
  in cars `

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
  		this.hsbcDescription,
  		["RPG","SDLC","AS400"]
  	)

    marcExperience = new WorkExperienceObject(
  		"MARC",
  		"Research Assistant",
  		"2015 May",
  		"2015 September",
  		new Address("270 Lonwood Rd. South","Hamilton","ON","Canada","L8P 0A6"),
  		this.MARCDescription,
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



