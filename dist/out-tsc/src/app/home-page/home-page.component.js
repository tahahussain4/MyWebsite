var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
let HomePageComponent = class HomePageComponent {
    constructor() {
        this.heading = "AboutMe";
        this.projectLink = "/projects";
        this.projectLinkName = "projects";
        this.skillsLink = "/skills";
        this.skillsLinkName = "skills";
        this.workLink = "/work";
        this.workLinkName = 'work experience';
        this.colorPallette = {
            lightestColor: "",
            lighterColor: "",
            mediumColor: "",
            darkerColor: "",
            darkestColor: ""
        };
    }
    ngOnInit() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], HomePageComponent.prototype, "color", void 0);
HomePageComponent = __decorate([
    Component({
        selector: 'app-home-page',
        templateUrl: './home-page.component.html',
        styleUrls: ['./home-page.component.css']
    }),
    __metadata("design:paramtypes", [])
], HomePageComponent);
export { HomePageComponent };
//# sourceMappingURL=home-page.component.js.map