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
import { trigger, state, style, animate, transition } from '@angular/animations';
let NavUnitComponent = class NavUnitComponent {
    constructor() {
        //subtracitng from original value will give a darker pallete
        this.hoveringState = "nonhovering";
    }
    ngOnInit() {
        this.navId = "navLink" + this.id;
        this.originalBackgroundColor = document.getElementById(this.navId).style.backgroundColor;
        // this.colorPalleteArray= colorUtils.getRandomColorPallette(this.originalBackgroundColor,5,30,colorUtils.subtract())
        console.log("nav bar pallete " + this.colorPalleteArray);
    }
    onHover() {
        console.log("hover");
        console.log("nav bar pallete " + this.colorPalleteArray);
        this.hoveringState = "hovering";
        document.getElementById(this.id).style.backgroundColor = this.colorPalleteArray[2];
    }
    onLeave() {
        console.log("leave");
        this.hoveringState = "nonhovering";
        document.getElementById(this.id).style.backgroundColor = this.originalBackgroundColor;
    }
    setColor(backgroundColor, fontColor, id) {
        let formedStyle = "color:" + fontColor + ";background-color:" + backgroundColor + ';';
        console.log("nav unit componenet : " + formedStyle);
        document.getElementById(id).setAttribute("style", formedStyle);
    }
    ngAfterViewInit() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], NavUnitComponent.prototype, "linkName", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NavUnitComponent.prototype, "link", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NavUnitComponent.prototype, "id", void 0);
NavUnitComponent = __decorate([
    Component({
        selector: 'app-nav-unit',
        template: `
  <div class="navUnit" [id]='navId' [@hoverState] = 'hoveringState' (mouseover)="onHover()" (mouseleave)="onLeave()">
	  <a routerLink ="{{link}}" routerLinkActive="active">{{linkName}}</a>
  </div>
`, animations: [
            trigger('hoverState', [
                state('nonhovering', style({
                    'font-size': 'calc(13px + 0.5vw`)'
                })),
                state('hovering', style({})),
                transition('nonhovering <=> hovering', [animate(200)])
            ])
        ],
        styleUrls: ['./nav-unit.component.css']
    }),
    __metadata("design:paramtypes", [])
], NavUnitComponent);
export { NavUnitComponent };
//# sourceMappingURL=nav-unit.component.js.map