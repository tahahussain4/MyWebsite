import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-work-experience-page',
  templateUrl: './work-experience-page.component.html',
  styleUrls: ['./work-experience-page.component.css']
})

export class WorkExperiencePageComponent implements OnInit {
  heading = "Work Experience";
  intactDescription =`At Intact I work in the ECM team as a consultant. ECM is the Enterprise content management system provided
  by IBM to manage documents of different types as well as the freedom to control mutiple storage and administrative options using 
  provided applicaitons or scripts.
  <br/>
  <br/>
  <p>
  My responsiblities include :
     <ul>
       <li>Supporting applications managed by our team</li>
       <li>Development work on projects and change requests</li>
       <li>Aiding in solutions design</li>
       <li>Assiting in improving the team and platform</li>
       <li>  Coordinating with teams on inter-system issues</li>
     </ul>  
   </p>
  `


  hsbcDescription = `At HSBC I worked as a software developer in the SE department.I worked exclusively on AS400 systems
  provided by IBM and coded in the RPG. The main focus of my work was the term deposit project. 
      <br/>
      <br/>
      <p>
        My responsibilites included :
        <ul>
          <li>Developement work according to comapny standards</li>
          <li>Documentation of solutions</li>
          <li>Helping in the the SDLC lifecycle</li>
          <li>Support during QA and UAT phases</li>
        </ul> 
      </p>
  ` ;

  MARCDescription = `MARC (McMaster automotive resource centre) was a coop expereince that I took under my professor at the time. 
  The focus of the research was CAN networks used in the automotive industry.
  I worked on a number of things including: 
    <p>
        <ul>
          <li>Designing and setting up test beds for expandibility</li>
          <li>Coding in C to mimik real world situations</li>
          <li>Setting up effective data acquisition and post processing methods</li>
        </ul> 
     </p>
   `

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



