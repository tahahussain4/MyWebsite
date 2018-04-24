import { Component } from '@angular/core';
import { GetUsersService} from './get-users.service'
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

  getUsers(){
  	this._getUsersService.getAllUsers().subscribe(res => this.users = res)
  }

  constructor(_getUsersService : GetUsersService){
  	this._getUsersService = _getUsersService;
  }


}
