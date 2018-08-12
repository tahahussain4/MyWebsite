import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-project-box',
  templateUrl: './project-box.component.html',
  styleUrls: ['./project-box.component.css']
})
export class ProjectBoxComponent implements OnInit {	
	hideDetails = true;
  
  @Input() description;
  @Input() skills :String[];
  @Input() heading : String;

  constructor() { }

  ngOnInit() {
  }

  headingClicked(){
  	this.hideDetails  = !this.hideDetails;
  }

}
