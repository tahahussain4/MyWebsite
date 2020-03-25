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
let SkillsPageComponent = class SkillsPageComponent {
    constructor() {
        this.heading = "Skills";
        this.languages = [
            new SkillObject("Java", "2 years (Fluent)"),
            new SkillObject("Html", "1.5 years"),
            new SkillObject("Css", "1 year"),
            new SkillObject("JavaScript", "1 year"),
            new SkillObject("Python", "1 year"),
            new SkillObject("C++", "1 year"),
            new SkillObject("C", "2 years"),
            new SkillObject("RPG", "1 year"),
            new SkillObject("SQL", "1.5 years")
        ];
        this.technologies = [
            new SkillObject("IBM DB2", "Experienced"),
            new SkillObject("Git", "Experienced"),
            new SkillObject("TomCat", "Experienced"),
            new SkillObject("Spring MVC", "Experienced"),
            new SkillObject("Jave EE", "Experienced"),
            new SkillObject("Angular 4", "Experienced"),
            new SkillObject("NodeJS", "Proficient"),
            new SkillObject("Express", "Proficient"),
            new SkillObject("Mongod", "Proficient"),
            new SkillObject("Websockets", "Proficient"),
        ];
        this.technologyContainer = new skillCategoryObject("Technologies", this.technologies);
        this.languagesContainer = new skillCategoryObject("Languages", this.languages);
        this.skillContainerArray = [
            this.languagesContainer,
            this.technologyContainer
        ];
    }
    ngOnInit() {
    }
    genArray(n) {
        return Array(n);
    }
};
SkillsPageComponent = __decorate([
    Component({
        selector: 'app-skills-page',
        templateUrl: './skills-page.component.html',
        styleUrls: ['./skills-page.component.css']
    }),
    __metadata("design:paramtypes", [])
], SkillsPageComponent);
export { SkillsPageComponent };
class skillCategoryObject {
    constructor(skillCategory, skillArray) {
        this.skillArray = skillArray;
        this.skillCatergory = skillCategory;
    }
    getSkillCategory() {
        return this.skillCatergory;
    }
    getSkillArray() {
        return this.skillArray;
    }
}
class SkillObject {
    constructor(skillName, property) {
        this.skillName = skillName;
        this.property = property;
    }
    getSkillName() {
        return this.skillName;
    }
    getProperty() {
        return this.property;
    }
}
//# sourceMappingURL=skills-page.component.js.map