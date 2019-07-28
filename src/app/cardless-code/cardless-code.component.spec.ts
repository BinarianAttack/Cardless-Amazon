import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardlessCodeComponent } from './cardless-code.component';

describe('CardlessCodeComponent', () => {
  let component: CardlessCodeComponent;
  let fixture: ComponentFixture<CardlessCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardlessCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardlessCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
