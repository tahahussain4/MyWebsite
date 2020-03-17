export class Project{
	id : String;
	name : String;
	description : String;
	yearFrom : number;
	yearTo : number;

	constructor(id:String,name:String,description:String,yearTo:number,yearFrom : number){
		this.id = id;
		this.name = name;
		this.description = description;
		this.yearFrom = yearFrom;
		this.yearTo = yearTo;				
	}
}