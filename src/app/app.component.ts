import { Component,ViewChild ,AfterViewInit} from '@angular/core';
import { GetUsersService} from './get-users.service'
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers : [],
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  customTitle = 'Alex is not too bad';
  users : Array<any>;
  _getUsersService : GetUsersService;
  colorPalleteArray : String[]



  getUsers(){
  	this._getUsersService.getAllUsers().subscribe(res => this.users = res)
  }

  ngOnInit(){
      var colorPalleteArray = colorUtils.getDefaultColorPalette()
      let fontColor = colorPalleteArray[4]
      let backgroundColor = colorPalleteArray[0]

      let formedStyle = "color:"+fontColor+";background-color:"+backgroundColor ;

      // console.log(formedStyle)
      var element = document.getElementById('socialMediaContainer');

      element.style.backgroundColor = backgroundColor;
      element.style.color = fontColor;
  }

  constructor(_getUsersService : GetUsersService){
  	this._getUsersService = _getUsersService;
  }
}
