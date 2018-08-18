import { Component, OnInit,Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-nav-unit',
  template: `
  <div #navBox  [@hoverState] = 'hoveringState' (mouseover)="onHover()" (mouseleave)="onLeave()">
	  <a class="nav" routerLink ="{{link}}" routerLinkActive="active">{{linkName}}</a>
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

  @Input() linkName : String;
  @Input() link : String;


  constructor() { }

  ngOnInit() {
  }

  onHover(){
    console.log("hover")
    this.hoveringState = "hovering";
  }

  onLeave(){
    console.log("leave")
  	this.hoveringState = "nonhovering";
  }

}
