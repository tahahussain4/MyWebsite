import { async, TestBed } from '@angular/core/testing';
import { WorkExperiencePageComponent } from './work-experience-page.component';
describe('WorkExperiencePageComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WorkExperiencePageComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(WorkExperiencePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=work-experience-page.component.spec.js.map