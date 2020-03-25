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
// import { NavUnitComponent } from './nav-unit/nav-unit.component';
let NavigationBarComponent = class NavigationBarComponent {
    constructor() {
        this.navigationStyle = { 'width': '20%' };
        this.ticks = 0;
        this.links = [
            new LinkObject("Home", "/"),
            new LinkObject("Projects", "/projects"),
            new LinkObject("Skills", "/skills"),
            new LinkObject("Work", "/work")
        ];
        this.animationClass = "";
    }
    ngOnInit() {
    }
};
NavigationBarComponent = __decorate([
    Component({
        selector: 'app-navigation-bar',
        templateUrl: './navigation-bar.component.html',
        styleUrls: ['./navigation-bar.component.css', '../externalCSS/animation.css']
    }),
    __metadata("design:paramtypes", [])
], NavigationBarComponent);
export { NavigationBarComponent };
class LinkObject {
    constructor(linkDisplayName, link) {
        this.link = "";
        this.linkDisplayName = "";
        this.link = link;
        this.linkDisplayName = linkDisplayName;
    }
}
//# sourceMappingURL=navigation-bar.component.js.map