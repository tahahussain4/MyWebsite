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
let SocialMediaComponent = class SocialMediaComponent {
    constructor() {
        this.socialList = [
            new SocialMediaClass("https://www.facebook.com/taha.hussain.me", "facebook", "./assets/facebook_icon.png"),
            new SocialMediaClass("https://www.linkedin.com/in/tahahussainengineering/", "linkedIn", "./assets/linkedin_icon.png"),
            new SocialMediaClass("https://www.instagram.com/tahahussain/", "instagram", "./assets/instagram_icon.png"),
            new SocialMediaClass("https://twitter.com/TahaHus57662778", "twitter", "./assets/twitter_icon.png"),
        ];
    }
    ngOnInit() {
    }
};
SocialMediaComponent = __decorate([
    Component({
        selector: 'app-social-media',
        templateUrl: './social-media.component.html',
        styleUrls: ['./social-media.component.css']
    }),
    __metadata("design:paramtypes", [])
], SocialMediaComponent);
export { SocialMediaComponent };
class SocialMediaClass {
    constructor(href, alt, imgSrc) {
        this.alt = alt;
        this.href = href;
        this.imgSrc = imgSrc;
    }
}
//# sourceMappingURL=social-media.component.js.map