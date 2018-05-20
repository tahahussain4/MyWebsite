import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.css']
})
export class SkillsPageComponent implements OnInit {
  heading = "Skills";



  languages = [
  	new SkillObject("Java","2 years (Fluent)"),
  	new SkillObject("Html","1.5 years"),
  	new SkillObject("Css","1 year"),
  	new SkillObject("JavaScript","1 year"),
  	new SkillObject("Python","1 year"),
  	new SkillObject("C++","1 year"),
  	new SkillObject("C","2 years"),
  	new SkillObject("RPG","1 year"),
  	new SkillObject("SQL","1.5 years")
  ]

  technologies = [
  	new SkillObject("IBM DB2","Experienced"),
  	new SkillObject("Git","Experienced"),
  	new SkillObject("TomCat","Experienced"),
  	new SkillObject("Spring MVC","Experienced"),
	new SkillObject("Jave EE","Experienced"),
  	new SkillObject("Angular 4","Experienced"),
  	new SkillObject("NodeJS","Proficient"),
  	new SkillObject("Express","Proficient"),
  	new SkillObject("Mongod","Proficient"),
  	new SkillObject("Websockets","Proficient"),
  ]

  technologyContainer = new skillCategoryObject("Technologies",this.technologies);
  languagesContainer = new skillCategoryObject("Languages",this.languages);

  skillContainerArray = [
  	this.languagesContainer,
  	this.technologyContainer 	
  ]


  constructor() { }

  ngOnInit() {
  }

  genArray(n: number): any[] {
    return Array(n);
  }

}

class skillCategoryObject{
	skillCatergory : String;
	skillArray  : SkillObject[];
	constructor(skillCategory : String, skillArray : SkillObject[] ){
		this.skillArray = skillArray;
		this.skillCatergory = skillCategory;
	}

	getSkillCategory(){
		return this.skillCatergory;
	}

	getSkillArray(){
		return this.skillArray;
	}
}

class SkillObject{
	private skillName : String;
	private property : String;
	constructor(skillName : String, property : String){
		this.skillName = skillName;
		this.property = property;
	}

	getSkillName(){
		return this.skillName;
	}

	getProperty(){
		return this.property
	}
}