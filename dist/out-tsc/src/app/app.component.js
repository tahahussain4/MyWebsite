var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { GetUsersService } from './get-users.service';
let AppComponent = class AppComponent {
    constructor(_getUsersService) {
        this.title = 'app';
        this.customTitle = 'Alex is not too bad';
        this._getUsersService = _getUsersService;
    }
    getUsers() {
        this._getUsersService.getAllUsers().subscribe(res => this.users = res);
    }
    ngOnInit() {
        var colorPalleteArray = colorUtils.getDefaultColorPalette();
        let fontColor = colorPalleteArray[4];
        let backgroundColor = colorPalleteArray[4];
        let formedStyle = "color:" + fontColor + ";background-color:" + backgroundColor;
        document.getElementById('navigation').setAttribute("style", formedStyle);
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        providers: [],
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [GetUsersService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map