import { Injectable } from '@angular/core';
import {Project} from '../model/Project'

@Injectable({
  providedIn: 'root',
})
export class ProjectService {


  constructor() { }

  getProjects() : Project[] {
  	let pArray : Project[] = [new Project("id","test","desc",20,20)];
  	return  pArray;
  }

}