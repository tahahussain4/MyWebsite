import { Injectable } from '@angular/core';
import {Project} from '../model/Project'
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ProjectService {

	restAPIPath : string = "http://192.168.2.143:4567";
	getAllProjectUrl : string ="/getAllProjects";

  constructor(private httpClient :HttpClient ) { 

  }

  getProjects() : Observable<Object> {

  	const observer  = this.httpClient.get(this.restAPIPath + this.getAllProjectUrl,{ 
  		headers : {'Origin': 'http://192.168.2.133/4200'}})
  	return observer;
  }
}