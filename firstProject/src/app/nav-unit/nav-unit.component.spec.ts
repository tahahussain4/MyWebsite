import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavUnitComponent } from './nav-unit.component';

describe('NavUnitComponent', () => {
  let component: NavUnitComponent;
  let fixture: ComponentFixture<NavUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
