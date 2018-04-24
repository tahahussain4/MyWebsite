import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-header-part',
  template: 
  `<div> 
	<div class="globalHeadings">
		{{heading}}
		<hr>
	</div>	
  </div>` 
  ,
  styleUrls: ['./header-part.component.css']
})
export class HeaderPartComponent implements OnInit {
	

  @Input() heading : string;
  constructor() { }

  ngOnInit() {
  }

}
