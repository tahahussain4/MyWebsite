import { Component, OnInit,Input ,AfterViewInit} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

declare var colorUtils : any;

@Component({
  selector: 'app-nav-unit',
  template: `
  <div [id]='id' #navBox [@hoverState] = 'hoveringState' (mouseover)="onHover()" (mouseleave)="onLeave()">
	  <a [id]='navId' class="nav" routerLink ="{{link}}" routerLinkActive="active">{{linkName}}</a>
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
  
  hoveringState = "nonhovering";
  colorPalleteArray = []
  navId : string;

  @Input() linkName : String;
  @Input() link : String;
  @Input() id : string;
  constructor() {   
    this.colorPalleteArray = colorUtils.getDefaultColorPalette()

   }

   ngOnInit(){
         this.navId = "navLink" + this.id;
   }

  onHover(){
    console.log("hover")
    this.hoveringState = "hovering";
    this.setColor(this.colorPalleteArray[1],this.colorPalleteArray[5],this.navId)

  }

  onLeave(){
    console.log("leave")
  	this.hoveringState = "nonhovering";
    this.setColor(this.colorPalleteArray[2],this.colorPalleteArray[5],this.navId)
    // this.setColor(this.colorPalleteArray[2],this.colorPalleteArray[5],this.navId)
  }

  setColor(backgroundColor: string,fontColor: string,id:string){
      let formedStyle = "color:"+fontColor+";background-color:"+backgroundColor +';';
      console.log("nav unit componenet : " + formedStyle)
      document.getElementById(id).setAttribute("style",formedStyle); 
  }
  ngAfterViewInit(){
      // this.setColor(this.colorPalleteArray[2],this.colorPalleteArray[5],this.)
      this.setColor(this.colorPalleteArray[2],this.colorPalleteArray[5],this.navId)
  }

}
