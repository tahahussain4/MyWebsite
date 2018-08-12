import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperiencePageComponent } from './work-experience-page.component';

describe('WorkExperiencePageComponent', () => {
  let component: WorkExperiencePageComponent;
  let fixture: ComponentFixture<WorkExperiencePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExperiencePageComponent ]
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
