import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCvComponent } from './member-cv.component';

describe('MemberCvComponent', () => {
  let component: MemberCvComponent;
  let fixture: ComponentFixture<MemberCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
