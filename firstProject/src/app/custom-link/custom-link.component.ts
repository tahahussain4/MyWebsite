import { Component, OnInit ,Input} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-custom-link',
  template: 
  `
  <a routerLink ="{{link}}" routerLinkActive="active" [@hoverState2] = 'hoveringState' (mouseover)="onHover()" (mouseleave)="onLeave()" >{{linkName}}</a>
 
  `,
  styleUrls: ['./custom-link.component.css'],
  animations: [
  trigger('hoverState2', [
    state('nonhovering', style({
      'font-size': 'calc(13px + 0.5vw)',
      'color' : 'black',
      'background-color' : 'transparent'
    })),
    state('hovering',   style({ 
      'font-size': 'calc(15px + 0.5vw)',
      'color' : '#228B22',
      'background-color' : '#90EE90'
  })),
    transition('nonhovering <=> hovering', [animate(200)])
  ])
  ]
})

export class CustomLinkComponent implements OnInit {
  @Input() linkName : String;
  @Input() link : String;

  hoveringState = "nonhovering";

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
