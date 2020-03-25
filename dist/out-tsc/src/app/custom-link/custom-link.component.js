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
let CustomLinkComponent = class CustomLinkComponent {
    constructor() {
        this.hoveringState = "nonhovering";
    }
    ngOnInit() {
    }
    onHover() {
        console.log("hover");
        this.hoveringState = "hovering";
    }
    onLeave() {
        console.log("leave");
        this.hoveringState = "nonhovering";
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], CustomLinkComponent.prototype, "linkName", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CustomLinkComponent.prototype, "link", void 0);
CustomLinkComponent = __decorate([
    Component({
        selector: 'app-custom-link',
        template: `  
  <a routerLink ="{{link}}" routerLinkActive="active" [@hoverState2] = 'hoveringState' (mouseover)="onHover()" (mouseleave)="onLeave()" >{{linkName}}</a>
 
  `,
        styleUrls: ['./custom-link.component.css'],
        animations: [
            trigger('hoverState2', [
                state('nonhovering', style({
                    'font-size': 'calc(10 + 0.5vw)',
                    'background-color': 'transparent'
                })),
                state('hovering', style({
                    'font-size': 'calc(10 + 1vw)',
                    'background-color': '#66ffcc',
                    'border-radius': '5px',
                    'padding': '0.2vw'
                })),
                transition('nonhovering <=> hovering', [animate(200)])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], CustomLinkComponent);
export { CustomLinkComponent };
//# sourceMappingURL=custom-link.component.js.map