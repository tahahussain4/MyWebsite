import { Component, OnInit ,Input,ViewChild,AfterViewInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { navigationBackground } from '../constants/globalSettings'
declare var colorUtils : any;
// import { NavUnitComponent } from './nav-unit/nav-unit.component';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css','../externalCSS/animation.css']
 })

export class NavigationBarComponent implements OnInit {
  animationClass : string;
  count : number;
  navigationStyle = {'width' : '20%'};
  links : LinkObject[];
  ticks=0;

   ngOnInit(){

     var hostElements = document.getElementsByClassName(":host");
     if(hostElements.length > 0 ){
       (hostElements[0] as HTMLElement).style.backgroundColor = navigationBackground;
     }
   } 

 constructor() { 
  	this.links = [
    new LinkObject("Home","/"),
    new LinkObject("Projects","/projects"), 
    new LinkObject("Skills","/skills"),
    new LinkObject("Work","/work")
    ]
  	this.animationClass="";
  }

}
 
class LinkObject {
  public link = "";
  public linkDisplayName = "";

  constructor(linkDisplayName : string, link : string){
      this.link = link;
      this.linkDisplayName = linkDisplayName;
   }  


}