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
import { trigger, state, style, animate, transition } from '@angular/animations';
let TriangleComponent = class TriangleComponent {
    constructor() {
        this.right = false;
    }
    ngOnInit() {
    }
    onClick() {
        console.log("i have been clicked");
        console.log(this.right);
        this.right = !this.right;
    }
};
TriangleComponent = __decorate([
    Component({
        selector: 'app-triangle',
        templateUrl: './triangle.component.html',
        styleUrls: ['./triangle.component.css'],
        animations: [
            trigger('clickTrigger', [
                state('clicked', style({
                    "border-bottom": "70px solid #fcf921",
                    "border-left": "140px solid transparent",
                    "border-right": "70px solid transparent"
                })),
                state('notClicked', style({
                    "border-bottom": "140px solid #fcf921",
                    "border-left": "70px solid transparent",
                    "border-right": "70px solid transparent"
                })),
                transition('clicked <=> notClicked', [animate(2000)])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], TriangleComponent);
export { TriangleComponent };
//# sourceMappingURL=triangle.component.js.map