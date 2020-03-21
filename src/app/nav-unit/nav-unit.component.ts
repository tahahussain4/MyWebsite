import { Component, OnInit,Input ,AfterViewInit} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { navigationBackground } from '../constants/globalSettings'

declare var colorUtils : any;

@Component({
  selector: 'app-nav-unit',
  template: `
  <div class="navUnit" [id]='navId' [@hoverState] = 'hoveringState' (mouseover)="onHover()" (mouseleave)="onLeave()">
	  <a routerLink ="{{link}}" routerLinkActive="active">{{linkName}}</a>
  </div>
`,  animations: [
  trigger('hoverState', [
    state('nonhovering', style({
      'font-size': 'calc(13px + 0.5vw`)'
    })),
    state('hovering',   style({ 
  })),
    transition('nonhovering <=> hovering', [animate(200)])
  ])
]
,
  styleUrls: ['./nav-unit.component.css']
})

export class NavUnitComponent implements OnInit {
  
  colorPalleteArray : string[];

  hoveringState = "nonhovering";

  navId : string;
  originalBackgroundColor : string;

  @Input() linkName : String;
  @Input() link : String;
  @Input() id : string;
  constructor() {   
   }

   ngOnInit(){
         this.navId = "navLink" + this.id;
         console.log()
   }

   ngAfterViewInit(){
     var element = document.getElementById(this.navId);
         this.originalBackgroundColor = navigationBackground;
         console.log(this.originalBackgroundColor + " original background color INIT" +  document.getElementById(this.navId)  )
         this.colorPalleteArray= colorUtils.getRandomColorPallette(this.originalBackgroundColor,5,30,colorUtils.subtract); //get darker tones
   }

  onHover(){
    console.log("hover")
    console.log("nav bar pallete " + this.colorPalleteArray)
    console.log(this.originalBackgroundColor + " original background color")
    document.getElementById(this.navId).style.backgroundColor = this.colorPalleteArray[2];
  }

  onLeave(){
    console.log("leave")
    document.getElementById(this.navId).style.backgroundColor = this.originalBackgroundColor ;

  }

  setColor(backgroundColor: string,fontColor: string,id:string){
      let formedStyle = "color:"+fontColor+";background-color:"+backgroundColor +';';
      console.log("nav unit componenet : " + formedStyle)
      document.getElementById(id).setAttribute("style",formedStyle); 
  }

}
