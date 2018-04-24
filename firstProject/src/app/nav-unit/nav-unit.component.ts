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
  <div #navBox class="nav" [@hoverState] = 'hoveringState' (mouseover)="onHover()" (mouseleave)="onLeave()" style="width : 50%">
	<a class="anchor" routerLink ="{{link}}" routerLinkActive="active">{{linkName}}</a>
  </div>
`,  animations: [
  trigger('hoverState', [
    state('nonhovering', style({
      width : '100%' ,
      'font-size': 'calc(13px + 0.5vw)'
    })),
    state('hovering',   style({ 
      width : '105%',
      'font-size': 'calc(17px + 0.5vw)'

  })),
    transition('nonhovering <=> hovering', [animate(2000)])
  ])
]
,
  styleUrls: ['./nav-unit.component.css']
})

export class NavUnitComponent implements OnInit {
  defaultlinkName = "buttonTest"
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
