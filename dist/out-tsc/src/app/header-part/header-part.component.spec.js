import { async, TestBed } from '@angular/core/testing';
import { HeaderPartComponent } from './header-part.component';
describe('HeaderPartComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderPartComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderPartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=header-part.component.spec.js.map