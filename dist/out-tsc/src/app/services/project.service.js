var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let ProjectService = class ProjectService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.restAPIPath = "http://192.168.2.143:4567";
        this.getAllProjectUrl = "/getAllProjects";
    }
    getProjects() {
        const observer = this.httpClient.get(this.restAPIPath + this.getAllProjectUrl, {
            headers: { 'Origin': this.restAPIPath }
        });
        return observer;
    }
};
ProjectService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], ProjectService);
export { ProjectService };
//# sourceMappingURL=project.service.js.map