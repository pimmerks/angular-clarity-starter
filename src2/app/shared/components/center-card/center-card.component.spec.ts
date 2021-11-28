import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterCardComponent } from './center-card.component';

describe('CenterCardComponent', () => {
  let component: CenterCardComponent;
  let fixture: ComponentFixture<CenterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
