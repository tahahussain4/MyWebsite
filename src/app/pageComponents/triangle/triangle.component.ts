import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css'],
   animations: [
  trigger('clickTrigger', [
    state('clicked', style({
		"border-bottom":  "70px solid #fcf921",
		"border-left" : "140px solid transparent",
		"border-right": "70px solid transparent"
    })),
    state('notClicked',   style({ 
		"border-bottom":  "140px solid #fcf921",
		"border-left" : "70px solid transparent",
		"border-right": "70px solid transparent"
  })),
    transition('clicked <=> notClicked', [animate(2000)])
  ])
]
})

export class TriangleComponent implements OnInit {
  right : Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
  	console.log("i have been clicked")
  	console.log(this.right)
	 this.right = !this.right;
  }



}
